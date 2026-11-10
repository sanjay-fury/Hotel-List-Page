import React, { useState, useEffect ,useMemo} from "react";
import {Helmet} from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,useLocation} from "react-router-dom";
import { addHotel, updateHotel, deleteHotel } from "../redux/hotelSlice";
import HotelCard from "../components/HotelCard";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";
import HotelForm from "../components/HotelForm";

function HotelList({ role }) {
  const hotels = useSelector(state => state.hotels);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [area, setArea] = useState("all");
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState("");
  const size = 6;

  useEffect(() => {
    const requestedHotel = location.state?.editHotel;
    if (requestedHotel && role === "admin") {
      setEditing(requestedHotel);
      setOpen(true);
      navigate("/", { replace: true, state: null });
    }
  }, [location.state, role, navigate]);

  const filtered = useMemo(() => hotels.filter(h => {
    const text = `${h.title} ${h.address || ""}`.toLowerCase();
    const matchesSearch = text.includes(search.toLowerCase());
    const matchesMin = min === "" || Number(h.price) >= Number(min);
    const matchesMax = max === "" || Number(h.price) <= Number(max);
    const matchesArea = area === "all" || (h.location || "").toLowerCase() === area.toLowerCase();
    return matchesSearch && matchesMin && matchesMax && matchesArea;
  }), [hotels, search, min, max, area]);

  const pages = Math.ceil(filtered.length / size);

  useEffect(() => {
    if (pages > 0 && page > pages) setPage(pages);
    if (pages === 0 && page !== 1) setPage(1);
  }, [pages, page]);

  const visible = filtered.slice((page - 1) * size, page * size);

  const save = hotel => {
    if (editing) {
      dispatch(updateHotel({ ...hotel, id: editing.id }));
      setMessage("Hotel updated successfully!");
    }
    else {
      dispatch(addHotel({ ...hotel, id: Date.now() }));
      setMessage("Hotel added successfully!");
    }
      setOpen(false);
    setEditing(null);
    setPage(1);
  };

  const remove = id => {
    if (window.confirm("Delete this hotel?")) {
      dispatch(deleteHotel(id));
      alert("Hotel deleted successfully!");
    }
  };

  const resetFilters = () => {
    setSearch(""); setMin(""); setMax(""); setArea("all"); setPage(1);
  };

  return (
    <main className="main-container">
      <Helmet>
        <title>Waynest | Every Journey Deserves a Great Stay</title>
        <meta name="description" content="Explore hotels around Trichy and Manapparai with Waynest. Search stays, compare prices and view hotel locations." />
      </Helmet>
      <div className="page-heading">
        <div><h1>Where Comfort Meets Travel</h1>
        <p>Good stays. Great experiences. Better journeys.</p>
      </div>
        {role === "admin" && <button className="primary-button" onClick={() => { setEditing(null); setOpen(true); }}>+ Add Hotel</button>}
      </div>

      <SearchFilter search={search} setSearch={v => { setSearch(v); setPage(1); }} 
      area={area} setArea={v => { setArea(v); setPage(1); }}
      minPrice={min} setMinPrice={v => { setMin(v); setPage(1); }}
      maxPrice={max} setMaxPrice={v => { setMax(v); setPage(1); }}
      onReset={resetFilters}/>

      <div className="listing-toolbar">
        <span className="hotel-count">
          {filtered.length} hotels found
        </span>
      </div>

      {message && <div className="success-message" role="status">{message}<button onClick={() => setMessage("")} aria-label="Dismiss message">×</button></div>}
      {open && role === "admin" && <HotelForm hotel={editing} onSave={save} onCancel={() => { setOpen(false); setEditing(null); }} />}

      <div className="hotel-grid">
        {visible.map(h => <HotelCard key={h.id} hotel={h} role={role}
          onView={() => navigate(`/hotel/${h.id}`)}
          onEdit={() => { setEditing(h); setOpen(true); }}
          onDelete={() => remove(h.id)} />)}
      </div>
      {filtered.length === 0 && <p className="empty-state">No hotels found. Try changing your search or filters.</p>}
      <Pagination currentPage={page} totalPages={pages} onPageChange={setPage} />
    </main>
  );
}

export default HotelList;
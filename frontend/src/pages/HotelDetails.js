import React, { useEffect ,useRef,useState} from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import {useSelector} from "react-redux";

L.Icon.Default.mergeOptions({iconUrl: markerIcon,iconRetinaUrl: markerIcon2x,shadowUrl: markerShadow});

function HotelDetails({role}) {
  const { id } = useParams();

  const navigate = useNavigate();
  
  const hotel = useSelector(state => state.hotels.find(item => String(item.id) === id));
  const mapElement = useRef(null);
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationMessage, setLocationMessage] = useState("");

  
  useEffect(() => {
    if (!hotel || !mapElement.current) return;

    const latitude = Number(hotel.latitude);
    const longitude = Number(hotel.longitude);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude) || latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) 
      return;

    const map = L.map(mapElement.current).setView(
      [latitude, longitude],
      15
    );

    mapRef.current = map;
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "&copy; OpenStreetMap contributors"
      }
    ).addTo(map);
    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(hotel.title);
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [hotel]);


  useEffect(() => {
    if (!mapRef.current || !userLocation) return;
    if (userMarkerRef.current) userMarkerRef.current.remove();
    userMarkerRef.current = L.marker([userLocation.latitude, userLocation.longitude])
      .addTo(mapRef.current).bindPopup("Your current location");
    const hotelPoint = [Number(hotel.latitude), Number(hotel.longitude)];
    const bounds = L.latLngBounds([hotelPoint, [userLocation.latitude, userLocation.longitude]]);
    mapRef.current.fitBounds(bounds, { padding: [35, 35], maxZoom: 15 });
  }, [userLocation, hotel]);

  const getMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationMessage("Geolocation is not supported by this browser.");
      return;
    }
    setLocationMessage("Getting your location…");
    navigator.geolocation.getCurrentPosition(
      position => {
        setUserLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        setLocationMessage("Your current location is shown on the map.");
      },
      error => {
        const messages = {
          1: "Location permission was denied. Allow location access in your browser settings and try again.",
          2: "Your location is currently unavailable. Please try again.",
          3: "Location request timed out. Please try again."
        };
        setLocationMessage(messages[error.code] || "Unable to get your location.");
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0}
    );
  };

  if (!hotel) 
    return <button onClick={() => navigate("/")}>Back</button>;

  return (
    <main className="main-container">
      <Helmet>
        <title>{hotel.title} | WayNest</title>
        <meta name="description" content={`${hotel.title}${hotel.address ? ` in ${hotel.address}` : ""} – ${hotel.description}`} />
      </Helmet>
      <div className="details-card">
        <img className="detail-image" src={hotel.image} alt={`${hotel.title} hotel`} />
        <div className="details-content">
          <div className="details-title-row">
            <div><h1>{hotel.title}</h1><p className="hotel-address">{hotel.address || "Location not provided"}</p></div>
            <h2 className="detail-price">₹{Number(hotel.price).toLocaleString("en-IN")} <span>/ night</span></h2>
          </div>
          <p className="detail-description">{hotel.description}</p>
          <div className="map-heading"><h2>Hotel Location</h2>
            {role === "admin" && <button className="secondary-button" onClick={() => navigate("/", { state: { editHotel: hotel } })}>Edit Hotel</button>}
          </div>
          <button className="primary-button location-button" onClick={getMyLocation}>Get My Location</button>
          {locationMessage && <p className="location-message" role="status">{locationMessage}</p>}
          <div ref={mapElement} id="hotel-map" aria-label={`Map showing the location of ${hotel.title}`} />
          <div className="coordinates">
            <span><strong>Latitude:</strong> {hotel.latitude}</span><br></br><br></br>
            <span><strong>Longitude:</strong> {hotel.longitude}</span>
          </div><br></br>
          <button className="secondary-button back-button" onClick={() => navigate("/")}>Back to Hotels</button>
        </div>
      </div>
    </main>
  );
}

export default HotelDetails;
import React from "react";

function SearchFilter({ search, setSearch,area,setArea, minPrice, setMinPrice,maxPrice, setMaxPrice,onReset }) {
  const validNumber = (value, setter) => {
    if (value === "" || /^\d+(\.\d*)?$/.test(value)){ 
      setter(value);
    }
  };

  return (
    <div className="search-filter">
      <input placeholder="Search by hotel title" value={search}
        onChange={e => setSearch(e.target.value)} />
      <select value={area} onChange={e => setArea(e.target.value)}>
        <option value="all">All Locations</option>
        <option value="trichy">Trichy</option>
        <option value="chennai">Chennai</option>
        <option value="madurai">Madurai</option>
        <option value="erode">Erode</option>
        <option value="karur">Karur</option>
        <option value="salem">Salem</option>
        <option value="manapparai">Manapparai</option>
      </select>
      <input type="text" inputMode="decimal" placeholder="Min price"
        value={minPrice} onChange={e => validNumber(e.target.value, setMinPrice)} />
      <input type="text" inputMode="decimal" placeholder="Max price"
        value={maxPrice} onChange={e => validNumber(e.target.value, setMaxPrice)} />
      <button className="secondary-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default SearchFilter;
import React from "react";
import Country from "../Pages/Country";
import "./SearchFilter.css"; // Import the CSS file

function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="search-filter-container">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
        className="search-input"
      />

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("desc")}>Desc</button>
      </div>

      <div>
        <select
          value={filter}
          onChange={handleSelectChange}
          className="filter-select"
        >
          <option value="All">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilter;
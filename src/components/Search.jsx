import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchComponent = ({ rows }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(rows);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = rows.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="search-icon">
          <IoSearchSharp />
        </div>
      </div>
    </>
  );
};
export default SearchComponent;

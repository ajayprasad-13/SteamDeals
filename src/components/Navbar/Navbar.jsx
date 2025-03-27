import React, { useContext, useState } from "react";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../SearchQuery";

export function Navbar() {
  const { searchQuery, setSearchQuery, setEndpoint } =
    useContext(SearchContext);

  const navigate = useNavigate();

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function handleKey(e) {
    if (e.key === "Enter") {
      setEndpoint(searchQuery);
      navigate("/pricehistory");
    }
  }

  return (
    <>
      <div className="navbar-container">
        <p className="navbar-title">STEAM DEALS</p>
        <span>
          <input
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
            type="text"
            name="search"
            placeholder="Search.."
            onKeyDown={handleKey}
          />
        </span>

        <Link to="/" className="navigations">
          Home
        </Link>

        <Link to="/pricehistory" className="navigations">
          Price History.
        </Link>
      </div>
    </>
  );
}

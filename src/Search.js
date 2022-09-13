import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <header>What's my weather?</header>
      <form>
        <input
          className="search-bar border-0 shadow-sm"
          type="text"
          placeholder="Enter City"
          autoComplete="off"
          autoFocus
          required
        />
        <input
          className="button shadow border-0"
          type="submit"
          value="SEARCH"
        />
        <input type="button" value="📍" className="current-button shadow" />
      </form>
    </div>
  );
}

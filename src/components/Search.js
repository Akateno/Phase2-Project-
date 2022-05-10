
import React from "react"

function Search({searchTerm, onChangeSearch}) {

    return (
      <div className="searchbar">
        <label htmlFor="search">Search Animals:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
        />
      </div>
    );
  }
  
  export default Search;
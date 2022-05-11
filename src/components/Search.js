
import React from "react"

function Search({searchTerm, onChangeSearch}) {

  function handleChange(event){
    return onChangeSearch(event.target.value)
  }
    


return (
      <div className="searchbar">
        <h3>Search Animal:</h3>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    );
  }
  
  export default Search;
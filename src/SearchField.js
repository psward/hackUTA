import React from 'react';

const SearchField = (props) => {
  return(
    <div>
      <label htmlFor="search">Search Recipes:</label>
      <input id="search" onChange={props.handleUserInput}/>
      <button onClick={() =>
      props.handleButtonClick()}>Search</button>
    </div>
  )
}

export default SearchField;

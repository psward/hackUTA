import React from 'react';

const SearchField = (props) => {
  return(
    <div>
      <input onChange={props.handleUserInput}/>
      <button onClick={() =>
      props.handleButtonClick()}>Search</button>
    </div>
  )
}

export default SearchField;

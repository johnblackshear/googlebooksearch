import React from 'react';

// props.handleSearch is from the Books.js constructor and method.
const SearchArea = (props) => {
    return (
      <div className="search-area">
        <form onSubmit={props.searchBook} action="">
            <input onChange={props.handleSearch} type="text"/>
            <button type='submit'>Search</button>
        </form>
      </div>
    )
}

export default SearchArea;
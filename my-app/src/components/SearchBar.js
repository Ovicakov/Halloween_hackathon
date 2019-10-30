import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return(
      <div class="search">
        <input type="text" class="searchTerm" placeholder="Which movies are you looking for ?"/>
        <button type="submit" class="searchButton">Movie me !</button>
      </div>
    )
  }
}

export default SearchBar
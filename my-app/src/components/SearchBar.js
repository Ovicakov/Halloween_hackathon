import React from 'react';
import axios from 'axios';

import './SearchBar.css';

class SearchBar extends React.Component {
  state={
    searchText:'',
    movies: []
  }

  getMovie = () => {
    axios
      .get(`https://hackathon-wild-hackoween.herokuapp.com/movies/search/title/${this.state.searchText}`) 
      .then(res => this.setState({movies : res.data.movies}, _=>{console.log(res);
      }))
  }

  onSearchChange = event => {
    axios
    .get(`https://hackathon-wild-hackoween.herokuapp.com/movies/search/title/${event.target.value}`) 
    .then(res => this.setState({movies : res.data.movies}, _=>{console.log(res);
    }))
  }

  render() {
    console.log(this.state);
    
    return(
      <div class="search">
        <input 
          type="text" 
          class="searchTerm" 
          placeholder="Which movies are you looking for ?"
          onChange={this.onSearchChange}
        />
        <button type="submit" class="searchButton" onClick={this.getMovie}>Movie me !</button>
        
      </div>
    )
  }
}

export default SearchBar
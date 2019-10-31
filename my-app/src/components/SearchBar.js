import React from 'react';
import axios from 'axios';

import CardMovie from './Cardmovie';

import './SearchBar.css';

class SearchBar extends React.Component {
  state={
    searchText:'',
    movies: []
  }

  getMovie = () => {
    axios
      .get(`https://hackathon-wild-hackoween.herokuapp.com/movies/search/title/${this.state.searchText}`) 
      .then(res => this.setState({movies : res.data.movies}))
  }

  onSearchChange = event => {
    if(event.target.value.length === 0){
      this.setState({movies : []})
    } else {
      axios
        .get(`https://hackathon-wild-hackoween.herokuapp.com/movies/search/title/${event.target.value}`) 
        .then((res) => {
          this.setState({movies : res.data.movies }  )
          return res
        }) 
        .then((res) => {
          this.props.searchMovies(res)
        })
    }
  }

  render() {
 console.log(this.props.movies)
    
    return(
      <div class="search">
        <input 
          type="text" 
          class="searchTerm" 
          placeholder="Which movies are you looking for ?"
          onChange={this.onSearchChange}
        />
        <button type="submit" class="searchButton" onClick={this.onSearchChange}>Movie me !</button>
        

        <div className ="ItemsMovies"> 
        <div className="movie"> 
          {this.state.movies.map(
          movie =>( <CardMovie movie={movie} key={movie.id} /> ))}
        </div>
      </div>

      </div>
       
    )
  }
}

export default SearchBar
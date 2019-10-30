import React from 'react';
import CardMovie from './CardMovie';

import axios from 'axios';

class MoviesList extends React.Component {
  state =  {
    movies : [],
  }
  
  getMovie = () => {
    axios
      .get('https://hackathon-wild-hackoween.herokuapp.com/movies') 
      .then(res => this.setState({movies : res.data.movies}))
  }

  componentDidMount = () => {
    this.getMovie ()
  }

  render () {
    return(
      <div className ="App"> 
        <div className="movie"> 
          {this.state.movies.map(
          movie =>( <CardMovie movie={movie} key={movie.id} /> ))}
        </div>
      </div>
    )
  }
}

export default MoviesList
import React from 'react';
import Cardmovie from './Cardmovie'
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
    console.log("this.state.movies", this.state.movies)
    return(
      <div className ="App"> 
        <div className="movie"> 
          {this.state.movies.map(
          movie =>( <Cardmovie movie={movie} key={movie.id} /> ))}
        </div>
      </div>
    )
  }
}

export default MoviesList
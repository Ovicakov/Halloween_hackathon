import React from 'react';
import './Cardmovie.css';

const CardMovie = ({ movie }) => {
  return (
    <div className="container">
      <img 
        className="imgCharacter"
        src={movie.posterUrl}/>
      <p className="titleMovie">{movie.title}</p>
      <p>By {movie.director} </p> 
      <p>{movie.year}  </p>
      <p>{movie.country}</p>
    </div>
  )
}

export default CardMovie



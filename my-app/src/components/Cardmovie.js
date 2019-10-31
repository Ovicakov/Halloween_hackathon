
import React from 'react';
import './Cardmovie.css';

const CardMovie = ({ movie }) => {
  return (
    <div containerCard>
      <img 
        className="imgCharacter"
        src={movie.posterUrl}/>
        <p>Movie:{movie.title}</p>
        <p>Director : {movie.director} </p> 
        <p>Year : {movie.year}  </p>
        <p>Country : {movie.country}</p>
    </div>
  )
}

export default CardMovie



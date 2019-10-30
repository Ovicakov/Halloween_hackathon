
import React from 'react';
import './Cardmovie.css';

const Cardmovie = ({ movie }) => {
    return (
        <div containerCard>
        <img className="imgCharacter"
            src={movie.posterUrl}/>
            <p>{movie.title}<br/>
         Director : {movie.director} <br/> 
         Year : {movie.year}  <br/>
         Country : {movie.country}
         </p>
  
    </div>

    )

}
export default Cardmovie



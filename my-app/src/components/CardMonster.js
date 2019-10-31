import React from 'react';
import './CardMonster.css';

const CardMonster = ({ monster }) => {
  // console.log('monster', monster);
  
  return (
    <div containerCard>
      <img 
        className="imgCharacter"
        src={monster.picture}/>
        <p>Name :{monster.name}</p>

    </div>
  )
}

export default CardMonster



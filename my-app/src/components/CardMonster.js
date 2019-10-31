import React from 'react';
import './CardMonster.css';

const CardMonster = ({ monster }) => {
  // console.log('monster', monster);
  
  return (
    <div className='kik'>
      <img 
        className="imgCharacterMonster"
        src={monster.picture}/>
      

    </div>
  )
}

export default CardMonster



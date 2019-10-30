import React from 'react'
import logo from "./BloodleHD.png"
import './Header.css'

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <img className="logo" src={logo}/>
      </div>
      
    )
  }
}


export default Header
import React, { Component } from 'react';
import pokelogo from '../../assets/images/pokelogo.png';
import './style.css';

class Header extends Component {
  render() { 
    return ( 
      <header>
        <img src={pokelogo} alt="Logo Pokemon"/>
      </header>
    );
  }
}
 
export default Header;
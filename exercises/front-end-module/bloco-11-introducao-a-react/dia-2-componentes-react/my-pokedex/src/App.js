import React, { Component } from 'react';
import Pokedex from './components/Pokedex/';
import pokemons from './data';

class App extends Component {
  render() { 
    return (
      <Pokedex pokemons={pokemons}/>
    );
  }
}
 
export default App;

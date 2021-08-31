import React, { Component } from 'react';
import Pokemon from '../Pokemon';

class Pokedex extends Component {
  render() {
    const pokes = this.props.pokemons
    return (
      <div>
        {pokes.map((pokemon, id) => <Pokemon key={id} pokemon={pokemon} />)}
      </div>
    );
  }
}
 
export default Pokedex;
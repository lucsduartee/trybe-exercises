import React, { Component } from 'react';
import Pokemon from '../Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        {pokemons.map((pokemon, id) => <Pokemon key={id} pokemon={pokemon} />)}
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Pokedex;
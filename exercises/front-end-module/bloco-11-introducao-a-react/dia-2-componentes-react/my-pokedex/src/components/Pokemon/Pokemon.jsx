import React, { Component } from "react";
import PropTypes from "prop-types";
import './style.css'

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight:{ value, measurementUnit }, image } = pokemon;

    return (
      <div className="pokemon-container">
        <section className="pokemon">
          <div className="pokemon-info">
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average Weight: {value}{" "}
              {measurementUnit}
            </p>
          </div>
          <img className="pokemon-image" src={image} alt={`Image of ${name}`} />
        </section>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
};

export default Pokemon;

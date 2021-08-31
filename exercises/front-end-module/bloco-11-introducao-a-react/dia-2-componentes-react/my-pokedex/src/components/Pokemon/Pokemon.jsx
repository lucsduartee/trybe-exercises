import React, { Component } from "react";
import PropTypes from "prop-types";
import './style.css'

class Pokemon extends Component {
  render() {
    return (
      <div className="pokemon-container">
        <section className="pokemon">
          <div className="pokemon-info">
            <p>{this.props.pokemon.name}</p>
            <p>{this.props.pokemon.type}</p>
            <p>
              Average Weight: {this.props.pokemon.averageWeight.value}{" "}
              {this.props.pokemon.averageWeight.measurementUnit}
            </p>
          </div>
          <img className="pokemon-image"src={this.props.pokemon.image} alt="" />
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

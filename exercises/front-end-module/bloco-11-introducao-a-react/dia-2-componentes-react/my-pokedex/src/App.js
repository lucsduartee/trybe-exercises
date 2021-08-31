import React, { Component } from "react";
import Header from "./components/Header/Header";
import Pokedex from "./components/Pokedex/";
import pokemons from "./data";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;

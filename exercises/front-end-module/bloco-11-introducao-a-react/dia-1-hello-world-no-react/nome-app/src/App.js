import './App.css';
import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const arr = ['limpar casa', 'estudar react', 'lavar a roupa', 'assistir série'];

class App extends Component {
  render() {
    return (
      <>
        {arr.map(item => Task(item))}
      </>
    );
  }
}

export default App;

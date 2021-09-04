import React, { Component } from "react";
import LastJobInfo from "./components/LastJobInfo";
import PersonalData from "./components/PersonalData/PersonalData";
import Infos from './components/Infos';
import { Button } from "@material-ui/core";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: 0,
      streetAndNumber: '',
      city: '',
      st4te: '',
      resumo: '',
      cargo: '',
      descricaoCargo: '',
      show: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({...this.state, [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({...state, show: !state.show}));
  }

  render() {
    const { state } = this;
    const { show } = state;
    return (
      <main>
        <form onSubmit={this.handleSubmit} className="App">
          <PersonalData
            {...state}
            handleChangeCall={this.handleChange}
          />
          <LastJobInfo
            {...state}  
            handleChangeCall={this.handleChange} 
          />
          <Button type="submit" color="primary" variant="contained">Consolidar</Button>
        </form>
        {show ? <Infos {...state} /> : null}
      </main>
    );
  }
}

export default App;

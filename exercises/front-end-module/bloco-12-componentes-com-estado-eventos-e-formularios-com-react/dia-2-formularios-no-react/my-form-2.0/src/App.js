import React, { Component } from "react";
import LastJobInfo from "./components/LastJobInfo";
import PersonalData from "./components/PersonalData/PersonalData";
import Infos from "./components/Infos";
import { Button, Container, Grid } from "@material-ui/core";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Lucas",
      email: "lucas@example.com",
      cpf: 0,
      streetAndNumber: "LALALA",
      city: "LALALA",
      st4te: "LALALA",
      resumo: "LALALA",
      cargo: "LALALA",
      descricaoCargo: "LALALAL",
      show: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ ...this.state, [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({ ...state, show: !state.show }));
  }

  render() {
    const { state } = this;
    const { show } = state;
    return (
      <Container component="main" maxWidth="lg">
        <Grid container justifyContent="space-between" direction="row" spacing={4}>
          <Grid item>
            <Container
              component="form"
              maxWidth="sm"
              onSubmit={this.handleSubmit}
            >
              <PersonalData {...state} handleChangeCall={this.handleChange} />
              <LastJobInfo {...state} handleChangeCall={this.handleChange} />
              <Button type="submit" color="primary" variant="contained">
                Consolidar
              </Button>
            </Container>
          </Grid>
          <Grid item >
            <Container>{show ? <Infos {...state} /> : null}</Container>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;

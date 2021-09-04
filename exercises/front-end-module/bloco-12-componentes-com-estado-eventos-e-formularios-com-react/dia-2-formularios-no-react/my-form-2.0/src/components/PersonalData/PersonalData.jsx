import React, { Component } from 'react';
import Cpf from '../Cpf';
import Email from '../Email';
import Name from '../Name';
import City from '../City';
import StreetAndNumber from '../StreetAndNumber';
import St4te from '../St4te';
import { Container, Grid } from '@material-ui/core';

class PersonalData extends Component {
  render() { 
    const { name, email, cpf, streetAndNumber, city, st4te, handleChangeCall} = this.props;
    return (      
      <Container component="fieldset" maxWidth="md">
        <Grid container spacing={2}>
        <Grid item><Name value={name} handleChange={handleChangeCall} /></Grid>
        <Grid item><Email value={email} handleChange={handleChangeCall} /></Grid>
        <Grid item><Cpf value={cpf} handleChange={handleChangeCall} /></Grid>
        <Grid item><StreetAndNumber value={streetAndNumber} handleChange={handleChangeCall} /></Grid>
        <Grid item><City value={city} handleChange={handleChangeCall} /></Grid>
        <Grid item><St4te value={st4te} handleChange={handleChangeCall} /></Grid>
        </Grid>
      </Container>
    );
  }
}
 
export default PersonalData;
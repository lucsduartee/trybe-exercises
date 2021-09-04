import { Container } from '@material-ui/core';
import React, { Component } from 'react';

class Infos extends Component {
  render() {
    const {
      name,
      email,
      cpf,
      streetAndNumber,
      city,
      st4te,
      resumo,
      cargo,
      descricaoCargo,
    } = this.props
    
    return (
      <Container component="div" maxWidth="lg">
        <ul>
          <li>Nome: {name}</li>
          <li>Email: {email}</li>
          <li>Cpf: {cpf}</li>
          <li>Endereço: {streetAndNumber}</li>
          <li>Cidade: {city}</li>
          <li>Estado: {st4te}</li>
          <li>Resumo Profissional: {resumo}</li>
          <li>Cargo: {cargo}</li>
          <li>Descrição do Cargo: {descricaoCargo}</li>
        </ul>
      </Container>
    );
  }
}
 
export default Infos;
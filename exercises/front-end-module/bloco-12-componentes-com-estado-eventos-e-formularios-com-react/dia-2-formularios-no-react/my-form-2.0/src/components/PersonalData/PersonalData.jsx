import React, { Component } from 'react';
import Cpf from '../Cpf';
import Email from '../Email';
import Name from '../Name';
import City from '../City';
import StreetAndNumber from '../StreetAndNumber';
import St4te from '../St4te';

class PersonalData extends Component {
  render() { 
    const { name, email, cpf, streetAndNumber, city, st4te, handleChangeCall} = this.props;
    return (      
      <fieldset>
        <Name value={name} handleChange={handleChangeCall} />
        <Email value={email} handleChange={handleChangeCall} />
        <Cpf value={cpf} handleChange={handleChangeCall} />
        <StreetAndNumber value={streetAndNumber} handleChange={handleChangeCall} />
        <City value={city} handleChange={handleChangeCall} />
        <St4te value={st4te} handleChange={handleChangeCall} />
      </fieldset>
    );
  }
}
 
export default PersonalData;
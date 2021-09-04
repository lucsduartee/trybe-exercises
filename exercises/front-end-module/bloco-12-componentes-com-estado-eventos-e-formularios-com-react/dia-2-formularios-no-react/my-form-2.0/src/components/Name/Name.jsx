import { TextField } from '@material-ui/core';
import React, { Component } from 'react';

class Name extends Component {

  render() {
    const { value, handleChange} = this.props
    
    return (
        <TextField
          variant="outlined"
          id="outlined-basic"
          label="Nome"
          value={value} 
          type="text"
          name="name"
          onChange={handleChange}
          required 
        /> 
    );
  }
}
 
export default Name;
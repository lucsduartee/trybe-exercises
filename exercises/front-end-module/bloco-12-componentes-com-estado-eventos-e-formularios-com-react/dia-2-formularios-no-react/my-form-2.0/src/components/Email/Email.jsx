import { TextField } from '@material-ui/core';
import React, { Component } from 'react';

class Email extends Component {
  render() { 
    const {value: email, handleChange} = this.props;

    return (
        <TextField
          label="Email"
          variant="outlined"
          id="outlined-basic"
          value={email} 
          type="email"
          name="email"
          onChange={handleChange}
          required 
        /> 
    );
  }
}
 
export default Email;
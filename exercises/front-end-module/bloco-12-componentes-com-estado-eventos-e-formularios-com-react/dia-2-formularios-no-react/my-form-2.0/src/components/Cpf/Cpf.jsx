import { TextField } from "@material-ui/core";
import React, { Component } from "react";

class Cpf extends Component {
  render() {
    const { value: cpf, handleChange } = this.props;

    return (
        <TextField
          label="Cpf" 
          id="outlined-basic"
          variant="outlined"
          value={cpf}
          name="cpf"
          type="number"
          onChange={handleChange}
          required
        />
    );
  }
}

export default Cpf;

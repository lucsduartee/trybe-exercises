import { TextField } from "@material-ui/core";
import React, { Component } from "react";

class StreetAndNumber extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Logradouro"
          value={value}
          type="text"
          name="streetAndNumber"
          onChange={handleChange}
          required
        />
    );
  }
}

export default StreetAndNumber;

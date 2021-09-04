import { TextField } from "@material-ui/core";
import React, { Component } from "react";

class City extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
        <TextField
          label="Cidade"
          id="outlined-basic"
          variant="outlined"
          value={value.city}
          type="text"
          name="city"
          onChange={handleChange}
          required
        />
    );
  }
}

export default City;

import { TextField } from "@material-ui/core";
import React, { Component } from "react";

class St4te extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (

        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Estado"
          value={value}
          type="text"
          name="st4te"
          onChange={handleChange}
          required
        />
    );
  }
}

export default St4te;

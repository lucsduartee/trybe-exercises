import { TextField } from "@material-ui/core";
import React, { Component } from "react";

class LastJobInfo extends Component {
  render() {
    const { resumo, cargo, descricaoCargo, handleChangeCall } = this.props;

    return (
      <fieldset>
          <TextField
            id="filled-multiline-static"
            label="Resumo profissional"
            multiline
            variant="outlined"
            maxRows={5}
            name="resumo"
            value={resumo}
            onChange={handleChangeCall}
            required
          />
          <TextField
            variant="outlined"
            id="outlined-basic"
            label="Cargo"
            name="cargo"
            value={cargo}
            type="text"
            onChange={handleChangeCall}
            required
          />
          <TextField
            id="filled-multiline-static"
            label="Descrição do Cargo"
            multiline
            maxRows={5}
            variant="outlined"
            name="descricaoCargo"
            value={descricaoCargo}
            onChange={handleChangeCall}
            required
          />
      </fieldset>
    );
  }
}

export default LastJobInfo;

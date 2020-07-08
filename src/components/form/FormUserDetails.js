import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div style={{marginTop: '150px'}}>
        <TextField
          label="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          label="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          label="Email"
          onChange={handleChange("email")}
          defaultValue={values.Email}
        />
        <br />
        <br />
        <Button
          style={{ background: "#2E3B55", color: "#FFFFFF" }}
          label="Continue"
          onClick={this.continue}
        >
          Continue
        </Button>
      </div>
    );
  }
}

export default FormUserDetails;

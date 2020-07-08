import React, { Component, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MuiThemeProvider,
} from "@material-ui/core";

export class Success extends Component {
  first = (e) => {
    setTimeout(() => {
      this.props.firstStep();
    }, 1000);
  };
  render() {
    return (
      <div>
        <br />
        <Typography variant="title">Thank you for your submission!</Typography>
        <br />
        <Typography>You will get an email with further instructions</Typography>
        <Button
          style={{ background: "#2E3B55", color: "#FFFFFF" }}
          onClick={this.first}
        >
          To First
        </Button>
      </div>
    );
  }
}

export default Success;

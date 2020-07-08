import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { AppBar } from '@material-ui/core';
import useStyles from "./styles";

import LOGO from "../../assets/logo.png";

export default function Header() {
  const classes = useStyles();

  return (
      <AppBar color="secondary">
    <Grid container>
      <Grid item xs={4} justify="flex-start">
          <ArrowBackIosIcon className={classes.backIcon} />
      </Grid>
      <Grid container item xs={4} justify="center">
      <img src={LOGO} className={classes.logo} alt="" />
      </Grid>
      <Grid container item xs={4} justify="flex-end">
        <Typography variant="h5">000-000-0000</Typography>
      </Grid>
    </Grid>
    </AppBar>
  );
}

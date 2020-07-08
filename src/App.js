import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {theme } from './config/globalTheme';
import Routing from './routing';
import Header from './components/header/index'
import UserForm from './components/form/UserForm'
import Page from './components/header/page'

import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Page/>
    <CssBaseline />
    <Router >
     <Routing />
    </Router>
    {/* <Header /> */}
    <UserForm />
    
  </ThemeProvider>
  );
}

export default App;

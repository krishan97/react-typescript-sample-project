import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme/theme';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline /> <App /></ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

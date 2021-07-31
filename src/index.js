import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import Container from "./Container/Container"
import Navbar from "./NavBar/Navbar"
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

import Carte from './Card/Carte'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Container} exact />
        <Route path="/Carte" component={Carte} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

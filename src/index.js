import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import CRUD from "./components/CRUD";

ReactDOM.render(
  <React.StrictMode>
    <CRUD />
  </React.StrictMode>,
  document.getElementById('root')
);
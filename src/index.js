import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";





const app = (
  
  <BrowserRouter>
  <App />
  </BrowserRouter>
   )
   ReactDOM.render(app,document.getElementById('root'));



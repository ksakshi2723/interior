import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from "./component/Footer";

import About from './component/About';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (<>
    <Navbar/>
    <Switch>
      <Route path="/about" component={About}/>
      
      <Route path="/" component={Home}/>
    </Switch>
    
    <Footer/>

    </>
  );
}

export default App;

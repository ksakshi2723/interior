import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink,Link } from 'react-router-dom';
import logo from "../Images/bloomlogo.jpeg";
import about from './About';

function Navbar() {
  return (
      <>
   <nav className="navbar navbar-expand-lg navbar-light "id='navi'>
  <div class="container-fluid">
  <NavLink exact className="navbar-brand" id="navbar-brand" to="/"><img src={logo} alt="Bloom" height="62px"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav mb-2 mb-lg-2  ">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/about">Abount</Link>
      
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Residential Interiors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Commercial Interiors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
  </>
  );
}

export default Navbar;






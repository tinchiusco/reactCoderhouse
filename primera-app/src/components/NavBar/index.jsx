import React from "react";
import CartWidget from "../CartWidget";
import './styles.css'
import '../CartWidget/styles.css'



const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#a">GameLoft</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#b">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#c">Ultimos Juegos</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#d" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Extras
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#e">Emuladores</a></li>
              <li><a className="dropdown-item" href="#f">Retro</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#g">Arcade</a></li>
            </ul>
          </li>
          
        </ul>
        
        <CartWidget/>
      </div>
    </div>
  </nav>
      
   
  );
};

export default NavBar;


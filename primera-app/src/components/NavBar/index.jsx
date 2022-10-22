import React from "react";
import CartWidget from "../CartWidget";
import './styles.css'
import '../CartWidget/styles.css'



const NavBar = () => {
  return (
    
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#a">GameLoft</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#b">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#c">Ultimos Juegos</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#d" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Extras
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#e">Emuladores</a></li>
              <li><a class="dropdown-item" href="#f">Retro</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#g">Arcade</a></li>
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


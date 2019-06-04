import React from "react";
import { NavLink } from 'react-router-dom'



function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" class="navbar-brand">React Books</NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <NavLink to="/search" class="nav-item nav-link">Search</NavLink>
          <NavLink to="/saved" class="nav-item nav-link">saved</NavLink>
          </div>
        </div>
      </nav>  
    );
}

export default Navbar;
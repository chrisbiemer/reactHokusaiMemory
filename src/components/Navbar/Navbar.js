import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
      	  <p class="japanese"> 
北斎メモリゲーム</p>
          <p class="english">j a p a n e s e ˚ p r i n t f i n d e r</p>

      </div>
    </div>
  </nav>;

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Intelligence Test App</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/test-de-inteligencia">Test de Inteligencia</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

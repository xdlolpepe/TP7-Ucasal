import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <span className="logo">logo</span>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'activo' : '')}>
          Inicio
        </NavLink>
        <NavLink to="/proyectoBlob" className={({ isActive }) => (isActive ? 'activo' : '')}>
          proyectoBlob
        </NavLink>
        <NavLink to="/acerca" className={({ isActive }) => (isActive ? 'activo' : '')}>
          Acerca de nosotros
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'activo' : '')}>
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

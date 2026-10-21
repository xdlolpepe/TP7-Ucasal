import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

function Inicio() {
  return (
    <main className="pagina inicio">
      <h1>Bienvenido</h1>
      <p>
        Este proyecto fue desarrollado con React Router para el Trabajo
        Práctico N°7 de Lenguaje IV. Usa el menú de arriba para navegar entre
        las distintas secciones.
      </p>
      <Link to="/proyectoBlob" className="boton-link">
        Ir al ejemplo de Blobs
      </Link>
    </main>
  );
}

export default Inicio;

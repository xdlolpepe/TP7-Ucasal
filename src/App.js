import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import ProyectoBlob from './pages/ProyectoBlob';
import AcercaDe from './pages/AcercaDe';
import Contacto from './pages/Contacto';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectoBlob" element={<ProyectoBlob />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;

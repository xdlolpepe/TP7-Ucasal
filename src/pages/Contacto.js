import React, { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setEnviado(true);
  };

  return (
    <main className="pagina contacto">
      <h1>Contacto</h1>

      {enviado ? (
        <p className="confirmacion">
          ¡Gracias {nombre || 'por tu mensaje'}! Te vamos a responder a la brevedad.
        </p>
      ) : (
        <form className="formulario" onSubmit={manejarEnvio}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            rows="4"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribí tu mensaje..."
            required
          />

          <button type="submit">Enviar</button>
        </form>
      )}
    </main>
  );
}

export default Contacto;

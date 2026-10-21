import React, { useState } from 'react';
import './ProyectoBlob.css';
 
function ProyectoBlob() {
  // Estado para el texto y los mensajes
  const [textoOriginal] = useState('Este es un texto de ejemplo para el Trabajo Práctico N°7 de Lenguaje IV.');
  const [blobCreado, setBlobCreado] = useState(null);
  const [contenido, setContenido] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [fragmento, setFragmento] = useState('');
 
  const crearBlob = async () => {
    const blob = new Blob([textoOriginal], { type: 'text/plain' });
    setBlobCreado(blob);
    setMensaje('Blob creado correctamente. Ya puedes descargarlo o usar slice().');
    setFragmento('');
 
    // Leemos el contenido completo del Blob para mostrarlo en pantalla
    const texto = await blob.text();
    setContenido(texto);
 
    console.log('Blob creado:', blob);
  };
 
  const descargarBlob = () => {
    if (!blobCreado) {
      setMensaje('Primero tenés que crear un Blob.');
      return;
    }
 
    // Se crea una URL temporal que apunta al Blob en memoria
    const url = URL.createObjectURL(blobCreado);
 
    // Se arma un link invisible y se simula el click para disparar la descarga
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'archivo_blob.txt';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
 
    // Se libera la URL temporal de memoria
    URL.revokeObjectURL(url);
 
    setMensaje(`Descarga iniciada: archivo_blob.txt (${blobCreado.size} bytes).`);
  };
 
  const usarSlice = async () => {
    if (!blobCreado) {
      setMensaje('Primero tenés que crear un Blob.');
      return;
    }
 
    // slice(inicio, fin, tipo) -> devuelve un nuevo Blob con esa porción
    const inicio = 0;
    const fin = 30;
    const blobFragmento = blobCreado.slice(inicio, fin, 'text/plain');
 
    // Leemos el contenido del fragmento como texto
    const texto = await blobFragmento.text();
 
    setFragmento(texto);
    setMensaje(`Blob.slice(${inicio}, ${fin}) aplicado. Tamaño del fragmento: ${blobFragmento.size} bytes.`);
  };
 
  return (
    <main className="pagina proyecto-blob">
      <h1>Ejemplo de uso de Blobs</h1>
 
      <div className="botones">
        <button onClick={crearBlob}>Crear Blob de texto</button>
        <button onClick={descargarBlob}>Descargar Blob</button>
        <button onClick={usarSlice}>Usar slice()</button>
      </div>
 
      <div className="salida">
        {mensaje ? (
          <>
            <p className="titulo">{mensaje}</p>
            {blobCreado && (
              <p>Tamaño: {blobCreado.size} bytes — Tipo: {blobCreado.type}</p>
            )}
            {contenido && (
              <>
                <p className="subtitulo">Contenido completo del Blob:</p>
                <pre>{contenido}</pre>
              </>
            )}
            {fragmento && (
              <>
                <p className="subtitulo">Fragmento obtenido con slice():</p>
                <pre>{fragmento}</pre>
              </>
            )}
          </>
        ) : (
          <p className="placeholder">El resultado de cada acción va a aparecer acá...</p>
        )}
      </div>
    </main>
  );
}
 
export default ProyectoBlob;

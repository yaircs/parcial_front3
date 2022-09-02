import React from 'react'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

function Cabecera({ titulo, subtitulo, cantidad }) {
  
  return (
    <header>
      {/* maquetar Cabecera aquí */}
      <h1>{titulo}</h1>
      <p>
        {subtitulo}
         <span>{cantidad}</span>
      </p>
     
    </header>
  )
}
export default Cabecera;


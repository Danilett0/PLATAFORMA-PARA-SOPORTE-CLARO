import React from 'react'

function IpFija(props) {
  return (
    <div className="MainRazonLlamada">
    <div className="Box-Razones">
      <div className="Bloque">
        <div>
          <span>IP FIJA</span> <b>Vaidar Ruta Estatica, Sumar +2 a la Ip de Red</b>
        </div>
        <div>
          <span>MASCARA</span> <b>255.255.255.???</b>
        </div>
        <div>
          <span>PUERTA ENLACE</span>
          <b>Vaidar Ruta Estatica, Sumar +1 a la Ip de Red (ip valida)</b>
        </div>
        <div>
          <span>DNS1</span> <b>Cargando...</b>
        </div>
        <div>
          <span>DNS2</span> <b>Cargando...</b>
        </div>
      </div>
    </div>
  </div>
  )
}

export default IpFija

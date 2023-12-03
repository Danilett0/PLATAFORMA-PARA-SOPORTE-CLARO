import React from "react";

function IpFija(props) {
  return (
    <div className="maincontainers">
      <div className="container">
        <div className="boxContainer">
          <div>
            <span>IP FIJA</span>
            <b>Vaidar Ruta Estatica, Sumar +2 a la Ip de Red</b>
          </div>
          <div>
            <span>MASCARA</span> <b>255.255.255.???</b>
          </div>
          <div>
            <span>PUERTA enlace</span>
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
  );
}

export default IpFija;

import React from "react";

function IpFija() {
  return (
    <div className="maincontainers">
      <div className="container">
        <div className="boxContainer">
          <div>
            <span>IP FIJA</span>{" "}
            <b>IP ASIGNADA AL CLIENTE EN GERENCIA DE SERVICIOS</b>
          </div>
          <div>
            <span>MASCARA</span> <b>255.255.255.0</b>
          </div>
          <div>
            <span>PUERTA enlace</span>
            <b> IP FIJA TERMINADA EN 1 (XXX.XXX.XXX.1)</b>
          </div>
          <div>
            <span>DNS1</span> <b>190.157.8.33</b>
          </div>
          <div>
            <span>DNS2</span> <b>190.157.8.1</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IpFija;

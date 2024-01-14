import React from "react";

function IpFija() {
  return (
    <div className="maincontainers">
      <div className="container">
        <div className="boxContainer">
          <div>
            <span>IP FIJA</span>
            <b>Vaidar Ruta Estatica, Sumar +2 a la Ip de Red</b>
          </div>
          <div>
            <span>MASCARA 30</span> <b>255.255.255.252</b> {"\u00A0\u00A0"}
            <span>MASCARA 29</span> <b>255.255.255.248</b>
          </div>
          <div>
            <span>PUERTA enlace</span>
            <b>Vaidar Ruta Estatica, Sumar +1 a la Ip de Red (Ip Valida)</b>
          </div>
          <div>
            <span>DNS1</span> <b>190.157.8.33</b>
          </div>
          <div>
            <span>DNS2</span> <b>200.14.207.210</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IpFija;

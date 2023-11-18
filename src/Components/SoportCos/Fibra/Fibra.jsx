import React, { useState } from "react";
import Gpon from "./Gpon/Gpon";
import P2p from "./Gpon/P2p";
import "../../../styles/components/SoportCos/Fibra.css";

function Fibra() {
  const [gpon, setGpon] = useState(false);
  const [p2p, setP2p] = useState(false);

  return (
    <div className="MainFibra">
      <div className="EncabezadoFibra">
        <h2>Fibra Optica</h2>

        <h4>SELECCIONA EL TIPO DE RED DE ACCESO</h4>

        <div className="Botones">
          <button
            onClick={() => {
              setGpon(true);
              setP2p(false);
            }}
            className="Button Blue"
          >
            GPON
          </button>
          <button
            onClick={() => {
              setGpon(false);
              setP2p(true);
            }}
            className="Button Blue"
          >
            P2P
          </button>
        </div>
      </div>

      <div>
        {gpon && <Gpon />}

        {p2p && <P2p />}
      </div>
    </div>
  );
}

export default Fibra;

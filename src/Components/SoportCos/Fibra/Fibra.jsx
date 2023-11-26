import React, { useState } from "react";
import Gpon from "./Gpon/Gpon";
import P2p from "./PSP/P2p";
import Plantilla from "./Plantilla";
import KmCierre from "./KmCierre";

function Fibra() {
  const [gpon, setGpon] = useState(false);
  const [p2p, setP2p] = useState(false);
  const [plantilla, setPlantilla] = useState(false);
  const [Km, setKm] = useState(false);

  const resetStates = () => {
    setGpon(false);
    setP2p(false);
    setPlantilla(false);
    setKm(false);
  };

  return (
    <div className="MainFibra">
      <div className="EncabezadoFibra">
        <h2>Fibra 😏</h2>
        <h4>¿Qué te gustaria revisar?</h4>

        <div className="Botones">
          <button
            onClick={() => {
              resetStates();
              setGpon(true);
            }}
            className="Button Blue"
          >
            GPON
          </button>
          <button
            onClick={() => {
              resetStates();
              setP2p(true);
            }}
            className="Button Blue"
          >
            P2P
          </button>
          <button
            onClick={() => {
              resetStates();
              setPlantilla(true);
            }}
            className="Button Blue"
          >
            PLANTILLA PLANTA
          </button>

          <button
            onClick={() => {
              resetStates();
              setKm(true);
            }}
            className="Button Blue"
          >
            KM CIERRE
          </button>

        </div>
      </div>

      <div>
        {gpon && <Gpon />}

        {p2p && <P2p />}

        {plantilla && <Plantilla />}

        {Km && <KmCierre />}
      </div>
    </div>
  );
}

export default Fibra;

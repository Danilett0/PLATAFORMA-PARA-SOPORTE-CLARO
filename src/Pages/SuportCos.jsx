import React, { useState } from "react";
import ComFibra from "../Components/SoportCos/Fibra/Fibra";
import CompHfc from "../Components/SoportCos/Hfc/HFC";
import "../App.css";
import "../styles/pages/SuportCos.css";

function SuportCos() {
  const [Fibra, SetFibra] = useState(false);
  const [Hfc, SetHfc] = useState(false);

  return (
    <div className="mainSupportTool">

      <div className="options">
        <h2>
          Selecciona un tipo de conexión <br /> para continuar
        </h2>

        <img className="ImgAnimadaWork" src="/images/working.svg" alt="" />
        
        <div className="buttons">
          <button
            onClick={() => {
              SetFibra(true);
              SetHfc(false);
            }}
            className="Button Green"
          >
            FIBRA
          </button>
          <button
            onClick={() => {
              SetHfc(true);
              SetFibra(false);
            }}
            className="Button Red"
          >
            HFC
          </button>
        </div>
      </div>

      <div className="selectedOption">
        {Fibra && <ComFibra />}
        {Hfc && <CompHfc />}
      </div>
    </div>
  );
}

export default SuportCos;

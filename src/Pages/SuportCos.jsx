import React, { useState } from "react";
import ComFibra from "../Components/SoportCos/Fibra/Fibra";
import CompHfc from "../Components/SoportCos/Hfc/HFC";
import "../App.css";
import "../styles/pages/SuportCos.css";

function SuportCos() {
  const [Fibra, SetFibra] = useState(false);
  const [Hfc, SetHfc] = useState(false);

  return (
    <div className="Tecnologias">
      <div className="Opciones">
        <h2>Selecciona una tecnologia</h2>
        <div className="Botones">
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

      <div className="OpcionSelecionada">
        {Fibra && <ComFibra />}

        {Hfc && <CompHfc />}
      </div>
    </div>
  );
}

export default SuportCos;

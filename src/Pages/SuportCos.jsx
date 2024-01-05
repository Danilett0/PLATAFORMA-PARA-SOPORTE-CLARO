import React, { useState } from "react";
import ComFibra from "../Components/SoportCos/Fibra/Fibra";
import CompHfc from "../Components/SoportCos/Hfc/HFC";
import Clock from "../Components/SoportCos/Clock";
import Greeting from "../Components/Greeting";
import "../App.css";
import "../styles/pages/SuportCos.css";

function SuportCos() {
  const [Fibra, SetFibra] = useState(false);
  const [Hfc, SetHfc] = useState(false);

  return (
    <div className="mainSupportTool">
      <div className="options">
        <Clock />

        <div>
          <img
            className="ImgAnimadaWork"
            src="/images/car-animated.svg"
            alt=""
          />

          <div className="buttons">
            <Greeting />
            <h2>Selecciona la tecnologia que deseas validar</h2>

            <button
              onClick={() => {
                SetFibra(true);
                SetHfc(false);
              }}
              className={`Button Green ${Fibra ? "selected" : ""}`}
            >
              FIBRA
            </button>
            <button
              onClick={() => {
                SetHfc(true);
                SetFibra(false);
              }}
              className={`Button Red ${Hfc ? "selected" : ""}`}
            >
              HFC
            </button>
          </div>
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

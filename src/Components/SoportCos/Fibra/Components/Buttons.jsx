import React from "react";
import propTypes from "prop-types";

function Buttons(props) {
  return (
    <div className="Botones">
      <button
        onClick={() => {
          props.resetStates();
          props.setGpon(true);
        }}
        className="Button Blue"
      >
        GPON
      </button>
      {/* <button
        onClick={() => {
          props.resetStates();
          props.setP2p(true);
        }}
        className="Button Blue"
      >
        P2P
      </button> */}
      <button
        onClick={() => {
          props.resetStates();
          props.setPlantilla(true);
        }}
        className="Button Blue"
      >
        PLANTILLA PLANTA
      </button>

      <button
        onClick={() => {
          props.resetStates();
          props.setIpFija(true);
        }}
        className="Button Blue"
      >
        IP FIJA
      </button>

      <button
        onClick={() => {
          props.resetStates();
          props.setKm(true);
        }}
        className="Button Blue"
      >
        KM CIERRE
      </button>
    </div>
  );
}

Buttons.propTypes = {
  resetStates: propTypes.func.isRequired,
  setKm: propTypes.func.isRequired,
  setPlantilla: propTypes.func.isRequired,
  setP2p: propTypes.func.isRequired,
  setGpon: propTypes.func.isRequired,
};

export default Buttons;

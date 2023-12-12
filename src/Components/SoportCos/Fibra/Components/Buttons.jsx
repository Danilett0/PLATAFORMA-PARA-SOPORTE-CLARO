import React from "react";
import propTypes from "prop-types";

function Buttons(props) {
  return (
    <div className="menuOptions">
      <button
        onClick={() => {
          props.resetStates();
          props.setGpon(true);
        }}
        className="Button Blue"
      >
        GPON
      </button>
      <button
        onClick={() => {
          props.resetStates();
          props.setP2p(true);
        }}
        className="Button Blue"
      >
        P2P
      </button>

      <button
        onClick={() => {
          props.resetStates();
          props.setPlantaExterna(true);
        }}
        className="Button Blue"
      >
        PLANTA EXTERNA
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

      <button
        onClick={() => {
          props.resetStates();
          props.setPlantillas(true);
        }}
        className="Button Blue"
      >
        PLANTILLAS
      </button>
    </div>
  );
}

Buttons.propTypes = {
  resetStates: propTypes.func.isRequired,
  setKm: propTypes.func.isRequired,
  setPlantaExterna: propTypes.func.isRequired,
  setIpFija: propTypes.func.isRequired,
  setGpon: propTypes.func.isRequired,
  setP2p: propTypes.func.isRequired,
  setPlantillas: propTypes.func.isRequired,
};

export default Buttons;

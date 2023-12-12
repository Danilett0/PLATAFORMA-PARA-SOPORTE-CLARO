import React from "react";
import propTypes from "prop-types";

function Buttons(props) {
  return (
    <div className="menuOptions">
      <button
        className="Button Blue"
        onClick={() => {
          props.ResetModulos();
          props.SetRazonLlamada(true);
        }}
      >
        Razon de llamada
      </button>

      <button
        className="Button Blue"
        onClick={() => {
          props.ResetModulos();
          props.SetTipologia(true);
        }}
      >
        Tipologias
      </button>

      <button
        className="Button Blue"
        onClick={() => {
          props.ResetModulos();
          props.SetConfAvan(true);
        }}
      >
        Configuraciones Avanzadas
      </button>

      <button
        className="Button Blue"
        onClick={() => {
          props.ResetModulos();
          props.Setcommands(true);
        }}
      >
        Comandos RR
      </button>

      <button
        className="Button Blue"
        onClick={() => {
          props.ResetModulos();
          props.SetIpFija(true);
        }}
      >
        IP FIJA
      </button>

      <button
        className="Button Blue"
        onClick={() => {
          props.ResetModulos();
          props.setPlantillas(true);
        }}
      >
        Plantillas
      </button>
    </div>
  );
}

Buttons.propTypes = {
  ResetModulos: propTypes.func.isRequired,
  SetRazonLlamada: propTypes.func.isRequired,
  SetTipologia: propTypes.func.isRequired,
  SetConfAvan: propTypes.func.isRequired,
  Setcommands: propTypes.func.isRequired,
  SetIpFija: propTypes.func.isRequired,
  setPlantillas: propTypes.func.isRequired,
};

export default Buttons;

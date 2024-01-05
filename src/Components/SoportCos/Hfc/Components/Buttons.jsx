import React from "react";
import propTypes from "prop-types";

function Buttons(props) {
  return (
    <div className="menuOptions">
      <button
        className={`Button Blue ${props.razonLlamada ? "selected" : ""}`}
        onClick={() => {
          props.ResetModulos();
          props.SetRazonLlamada(true);
        }}
      >
        Razon de llamada
      </button>

      <button
        className={`Button Blue ${props.tipologia ? "selected" : ""}`}
        onClick={() => {
          props.ResetModulos();
          props.SetTipologia(true);
        }}
      >
        Tipologias
      </button>

      <button
        className={`Button Blue ${props.confAvan ? "selected" : ""}`}
        onClick={() => {
          props.ResetModulos();
          props.SetConfAvan(true);
        }}
      >
        Conf Avanzadas
      </button>

      <button
        className={`Button Blue ${props.comandos ? "selected" : ""}`}
        onClick={() => {
          props.ResetModulos();
          props.Setcommands(true);
        }}
      >
        Comandos RR
      </button>

      <button
        className={`Button Blue ${props.ipFija ? "selected" : ""}`}
        onClick={() => {
          props.ResetModulos();
          props.SetIpFija(true);
        }}
      >
        IP FIJA
      </button>

      <button
        className={`Button Blue ${props.plantillas ? "selected" : ""}`}
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

import React from "react";
import propTypes from "prop-types";

function Botones(props) {
  return (
    <div className="BtnOpciones">
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
        Tipologia de llamada
      </button>

      <button
        className="Button Blue"
        onClick={() => {
          props.ResetModulos();
          props.SetPerfilEscala(true);
        }}
      >
        Perfiles Escalamiento
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
          props.SetComandos(true);
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
    </div>
  );
}

Botones.propTypes = {
  ResetModulos: propTypes.func.isRequired,
  SetRazonLlamada: propTypes.func.isRequired,
  SetTipologia: propTypes.func.isRequired,
  SetPerfilEscala: propTypes.func.isRequired,
  SetConfAvan: propTypes.func.isRequired,
  SetComandos: propTypes.func.isRequired,
  SetIpFija: propTypes.func.isRequired,
};

export default Botones;

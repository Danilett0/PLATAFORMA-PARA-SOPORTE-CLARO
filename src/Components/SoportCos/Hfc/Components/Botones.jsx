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
  SetRazonLlamada: propTypes.bool.isRequired,
  SetTipologia: propTypes.bool.isRequired,
  SetPerfilEscala: propTypes.bool.isRequired,
  SetConfAvan: propTypes.bool.isRequired,
  SetComandos: propTypes.bool.isRequired,
  SetIpFija: propTypes.bool.isRequired,
};

export default Botones;

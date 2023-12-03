import React from "react";

function commands() {
  return (
    <div className="maincontainers">
      <div className="container">
        <div className="boxContainer">
          <h4>LLAMADA DE SERVICIO</h4>
          <div>
            <span>Crear</span> <b>SHIFT F11</b>
          </div>
          <div>
            <span>Buscar</span> <b>SHIFT F11 + F5</b>
          </div>
        </div>

        <div className="boxContainer">
          <h4>VALIDAR SI ES CUENTA PYMES</h4>
          <div>
            <span>Estrato</span> <b>SHIFT F4 + SHIFT F2</b>
          </div>
          <div>
            <span>F7 (Edificio)</span> <b>SHIFT F4</b>
          </div>
        </div>

        <div className="boxContainer">
          <h4>CREAR OT</h4>
          <div>
            <span>Crear</span> <b>SHIFT F3 + F6 (F2 avanzar)</b>
          </div>
          <div>
            <span>Buscar</span> <b>SHIFT F7</b>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="boxContainer">
          <h4>MARCACIONES O PQR</h4>
          <div>
            <span>Crear</span> <b>SHIFT F10</b>
          </div>
          <div>
            <span>Buscar</span> <b>SHIFT F10 + SHIFT F1 + SHIFT F4</b>
          </div>
        </div>

        <div className="boxContainer">
          <h4>Terminar PQR</h4>
          <div>
            <span>ABIERTA</span> <b>F5 + F3</b>
          </div>
          <div>
            <span>CERRADA</span> <b>F2 + F3</b>
          </div>
        </div>

        <div className="boxContainer">
          <h4>BUSQUEDA DE CUENTA</h4>
          <div>
            <span>CC / NIT</span> <b>SHIFT F9 + SHIFT F3</b>
          </div>
          <div>
            <span>TEL</span> <b>SHIFT F2 (60 + IND + NUMERO)</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default commands;

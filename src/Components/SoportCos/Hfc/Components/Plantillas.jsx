import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Plantilla } from "../Data/Plantilla";

function Plantillas() {
  const [situacion, setSituacion] = useState();

  const handleClick = (id) => {
    setSituacion(id === situacion ? "close" : id);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="Situaciones">
      {Plantilla.map((plantilla) => (
        <div className="Situacion" key={plantilla.id}>
          <button className="Button" onClick={() => handleClick(plantilla.id)}>
            <FaArrowCircleDown className="icon" /> {plantilla.Titulo}
          </button>
          <div className="Respuesta" style={{ height: situacion === plantilla.id ? "auto" : "0px", overflow: "hidden"}}>
            <p onClick={() => copyToClipboard(plantilla.Texto)}>
              {plantilla.Texto}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Plantillas;

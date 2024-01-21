import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { PlantillaWhatsapp1, PlantillaWhatsapp2 } from "../../Data/Plantilla";
import { copyToClipboard } from "../../../CopyText";

function Plantillas() {
  const [situacion, setSituacion] = useState();

  const handleClick = (id) => {
    setSituacion(id === situacion ? "close" : id);
  };

  return (
    <div>
      <div className="Plantilla">
        <h4>Manejo de chat</h4>
        {PlantillaWhatsapp1.map((plantilla) => (
          <div className="Plantilla" key={plantilla.id}>
            <button
              className="Button"
              onClick={() => handleClick(plantilla.id)}
            >
              <FaArrowCircleDown className="icon" /> {plantilla.Titulo}
            </button>
            <div
              className="templateDescription"
              style={{
                height: situacion === plantilla.id ? "auto" : "0px",
                overflow: "hidden",
              }}
            >
              <p onClick={copyToClipboard}>{plantilla.Texto}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Plantilla">
        <h4>Plantillas para Problemas</h4>
        {PlantillaWhatsapp2.map((plantilla) => (
          <div className="Plantilla" key={plantilla.id}>
            <button
              className="Button"
              onClick={() => handleClick(plantilla.id)}
            >
              <FaArrowCircleDown className="icon" /> {plantilla.Titulo}
            </button>
            <div
              className="templateDescription"
              style={{
                height: situacion === plantilla.id ? "auto" : "0px",
                overflow: "hidden",
              }}
            >
              <p onClick={copyToClipboard}>{plantilla.Texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plantillas;

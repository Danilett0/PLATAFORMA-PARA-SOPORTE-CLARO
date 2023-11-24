import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Plantilla } from "../Data/Plantilla";

function Plantillas() {
  const [pregunta, setpregunta] = useState();

  const handleClick = (id) => {
    setpregunta(id === pregunta ? "close" : id);
  };

  return (
    <div className="Preguntas">
      {Plantilla.map((plantilla) => (
        <div className="Pregunta" key={plantilla.id}>
          <h3 onClick={() => handleClick(plantilla.id)}>
            <FaArrowCircleDown className="icon" /> {plantilla.pregunta}
          </h3>
          <div
            className="Respuesta"
            style={{
              height: pregunta === plantilla.id ? "auto" : "0px",
              overflow: "hidden",
            }}
          >
            <div>
              <p>{plantilla.respuesta}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Plantillas;

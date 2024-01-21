import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Plantilla } from "../Data/Plantilla";
import {copyToClipboard} from "../../CopyText"

function Plantillas() {
  const [situacion, setSituacion] = useState();

  const handleClick = (id) => {
    setSituacion(id === situacion ? "close" : id);
  };

  return (
    <div className="mainPlantillaHfc">
      {Plantilla.map((plantilla) => (
        <div className="Plantilla" key={plantilla.id}>
          <button className="Button" onClick={() => handleClick(plantilla.id)}>
            <FaArrowCircleDown className="icon" /> {plantilla.Titulo}
          </button>
          <div className="templateDescription" style={{ height: situacion === plantilla.id ? "auto" : "0px", overflow: "hidden"}}>
            <p onClick={copyToClipboard}>
              {plantilla.Texto}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Plantillas;

import React, { useState } from "react";
import toastr from "toastr";
import { FaArrowCircleDown } from "react-icons/fa";
import { PlantillaWhatsapp1, PlantillaWhatsapp2 } from "../Data/Plantilla";
import "toastr/build/toastr.min.css";

function WhatsApp(props) {
  const [situacion, setSituacion] = useState();

  const handleClick = (id) => {
    setSituacion(id === situacion ? "close" : id);
  };

  const copyToClipboard = (e) => {
    navigator.clipboard
      .writeText(e.target.innerText)
      .then(() => {
        toastr.success("Texto copiado al portapapeles");
      })
      .catch((err) => console.error("Error al copiar el texto: ", err));
  };

  return (
    <div className="mainPlantillaHfc Whatsapp">
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
      <div className="InfoAdd">
        
        <div>
          <h4>Generar Notas F7</h4>
          <p onClick={copyToClipboard}> TK-XXXXXXXXX-DIS-FMM</p>
          <p onClick={copyToClipboard}> */*/ Soporte WhatsApp /*/*</p>

          <h4>Generar Notas F7 (visita)</h4>
          <p>**LLS: XXXX ** NOMBRE, CEL: XXXXX, DESCRIPCION </p>
        </div>

        

      </div>
    </div>
  );
}

export default WhatsApp;

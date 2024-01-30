import React, { useState } from "react";
import Form from "./FormsWhatsapp/Form";
import ResultadoPlantilla from "./FormsWhatsapp/ResultadoPlantilla";
import Plantillas from "./FormsWhatsapp/Plantillas";

function WhatsApp() {
  const [enviForm, setEnvioForm] = useState(false);
  const [Informacion, setInformacion] = useState({});
  const [Opcion, setOpcion] = useState({ visita: false, masiva: false });

  return (
    <div className="mainPlantillaHfc Whatsapp">
      <Plantillas />

      <div className="InfoAdd">
        <div className="BtnOpciones">
          <button
            className="Button Red"
            onClick={() => {
              setOpcion({ visita: true, masiva: false });
              setEnvioForm(false);
              setInformacion({});
            }}
          >
            Generar Visita
          </button>
          <button
            className="Button Green"
            onClick={() => {
              setOpcion({ visita: false, masiva: true });
              setEnvioForm(false);
              setInformacion({});
            }}
          >
            Generar Masiva
          </button>
        </div>

        {Opcion && (
          <>
            {!enviForm ? (
              <Form
                setInformacion={setInformacion}
                setEnvioForm={setEnvioForm}
                accion={`${Opcion.masiva ? "masiva" : "visita"}`}
              />
            ) : (
              <ResultadoPlantilla Informacion={Informacion} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default WhatsApp;

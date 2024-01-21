import React, { useState, useRef } from "react";
import Form from "./FormsWhatsapp/Form";
import ResultadoPlantilla from "./FormsWhatsapp/ResultadoPlantilla";
import Plantillas from "./FormsWhatsapp/Plantillas";

function WhatsApp() {
  const [enviForm, setEnvioForm] = useState(false);
  const [Informacion, setInformacion] = useState({});
  const valAccess = useRef();
  const [Opcion, setOpcion] = useState({ visita: false, masiva: false });
  const [Acces, setAcces] = useState(false);

  const ValidarAcceso = (e) => {
    e.target.value === "2143" ? setAcces(true) : setAcces(false);
  };

  return (
    <div className="mainPlantillaHfc Whatsapp">
      {Acces ? (
        <>
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
                    accion={`${Opcion.visita ? "visita" : "masiva"}`}
                  />
                ) : (
                  <ResultadoPlantilla Informacion={Informacion} />
                )}
              </>
            )}
          </div>
        </>
      ) : (
        <>
        <h3>Contraseña Requerida</h3>
        <input style={{display: "flex", margin: "auto"}} type="password" ref={valAccess} onChange={ValidarAcceso} />
        </>
      )}
    </div>
  );
}

export default WhatsApp;

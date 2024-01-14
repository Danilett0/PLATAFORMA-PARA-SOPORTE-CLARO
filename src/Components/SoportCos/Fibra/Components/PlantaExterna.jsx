import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function PlantaExterna() {
  const FormRef = useRef();
  const [enviForm, setEnvioForm] = useState(false);
  const [Informacion, setInformacion] = useState({});

  const { register, handleSubmit } = useForm();

  const copyToClipboard = (e) => {
    navigator.clipboard
      .writeText(e.target.innerText)
      .then(() => {
        toastr.success("Texto copiado al portapapeles");
      })
      .catch((err) => console.error("Error al copiar el texto: ", err));
  };

  return (
    <div className="mainPlantillaMasiva">
      {!enviForm ? (
        <form
          ref={FormRef}
          onSubmit={handleSubmit((data) => {
            setInformacion(data);
            setEnvioForm(true);
          })}
        >
          <div className="Colx2">
            <div>
              <label>TIPO DE SERVICIO</label>
              <input
                required
                defaultValue={"NEGOCIOS"}
                {...register("Tipo de Servicio")}
              />
            </div>

            <div>
              <label>SUBSEGMENTO</label>
              <input
                required
                defaultValue={"FRONT NEGOCIOS COS"}
                {...register("Sub Secmento")}
              />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>
                CÓDIGO DE SERVICIO *
              </label>
              <input
                placeholder="ADFH001"
                required
                {...register("Codigo del Servicio")}
              />
            </div>

            <div>
              <label>
                NOMBRE EMPRESA *
              </label>
              <input
                placeholder="JD ENTERPRISE SAS"
                required
                {...register("Nombre Empresa")}
              />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>AFECTACIÓN</label>
              <input
                required
                defaultValue={"SERVICIO CAIDO"}
                {...register("Afectacion")}
              />
            </div>

            <div>
              <label>
                DESCRIPCIÓN ACTIVIDAD *
              </label>
              <input
                placeholder="Se realizan pruebas de red de acceso..."
                required
                {...register("templateDescription")}
              />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>MEDICIÓN OTDR - PIM</label>
              <input defaultValue={"N/A"} {...register("Medicion OTDR")} />
            </div>

            <div>
              <label>
                RED DE ACCESO *
              </label>
              <input
                placeholder="ZAC-BOG.TRIARA-CP2"
                required
                {...register("Red de Acceso")}
              />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>PUERTO OLT *</label>
              <input
                placeholder="1/2/12:6"
                required
                {...register("Puerto OLT")}
              />
            </div>

            <div>
              <label>
                OT INSTALACIÓN *
              </label>
              <input
                placeholder="8783736"
                required
                {...register("OT Instalacion")}
              />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>
                CONTACTO DEL CLIENTE *
              </label>
              <input
                required
                defaultValue={"Nombre | Cel: 3112329898"}
                {...register("Contacto Cliente")}
                name="contact"
              />
            </div>

            <div>
              <label>PERMISOS ESPECIALES</label>
              <input
                required
                defaultValue={"NO SE REQUIERE"}
                {...register("Permisos")}
              />
            </div>
          </div>

          <input required className="Button Red" type="submit" />
        </form>
      ) : (
      <div className="ResultadoPlantilla">
      
        <button className="Button plantillaGenerada" onClick={copyToClipboard}>
          {Object.entries(Informacion)
            .filter(([key, value]) => value !== "")
            .map(([key, value]) => (
               <>{key}: ({value}) <br /> </>
            ))}
        </button>
        <div>
          <h5>Contacto Planta: <button onClick={copyToClipboard}>6017448595 Opción 1 Opción 3 Clave 358967</button></h5>
          <h5>Contacto Datos:  <button onClick={copyToClipboard}>6017448595 Opción 2 Opción 3 Clave 358967</button></h5>
        </div>
        </div>
      )}
    </div>
  );
}

export default PlantaExterna;

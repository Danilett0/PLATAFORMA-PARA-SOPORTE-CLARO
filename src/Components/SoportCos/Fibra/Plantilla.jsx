import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function Plantilla() {
  const FormRef = useRef();
  const [enviForm, setEnvioForm] = useState(false);
  const [Informacion, setInformacion] = useState({});

  const { register, handleSubmit } = useForm();

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = Object.entries(Informacion)
      .filter(([key, value]) => value !== "")
      .map(([key, value]) => `${key}: (${value})`)
      .join("\n");
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Contenido copiado al portapapeles");
  };

  return (
    <div className="Form-Plantilla">
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
              <label>CÓDIGO DE SERVICIO</label>
              <input placeholder="ADFH001" required {...register("Codigo del Servicio")} />
            </div>

            <div>
              <label>NOMBRE EMPRESA</label>
              <input placeholder="JD ENTERPRISE SAS" required {...register("Nombre Empresa")} />
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
              <label>DESCRIPCIÓN ACTIVIDAD</label>
              <input placeholder="Se realizan pruebas de red de acceso..." required {...register("Descripcion")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>MEDICIÓN OTDR - PIM</label>
              <input defaultValue={"N/A"} {...register("Medicion OTDR")} />
            </div>

            <div>
              <label>RED DE ACCESO (EQUIPO)</label>
              <input placeholder="ZAC-BOG.TRIARA-CP2" required {...register("Red de Acceso")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>PUERTO OLT</label>
              <input placeholder="1/2/12:6" required {...register("Puerto OLT")} />
            </div>

            <div>
              <label>OT INSTALACIÓN</label>
              <input placeholder="8783736" required {...register("OT Instalacion")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>CONTACTO DEL CLIENTE:</label>
              <input placeholder="JEFERSON CASTRO - CEL: 3112329898" required {...register("Contacto Cliente")} />
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
        <button className="Button Plantilla-Generada" onClick={copyToClipboard}>
          {Object.entries(Informacion)
            .filter(([key, value]) => value !== "")
            .map(([key, value]) => (
              <code key={key}>
                {key}: ({value}) <br />
              </code>
            ))}
        </button>
      )}
    </div>
  );
}

export default Plantilla;

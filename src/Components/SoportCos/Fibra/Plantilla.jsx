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
                defaultValue={"EMPRESAS Y NEGOCIOS"}
                {...register("Tipo de Servicio")}
              />
            </div>

            <div>
              <label>SUBSEGMENTO</label>
              <input
                defaultValue={"FRONT NEGOCIOS COS"}
                {...register("Sub Secmento")}
              />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>CÓDIGO DE SERVICIO</label>
              <input {...register("Codigo del Servicio")} />
            </div>

            <div>
              <label>NOMBRE EMPRESA</label>
              <input {...register("Nombre Empresa")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>AFECTACIÓN</label>
              <input
                defaultValue={"SERVICIO CAIDO"}
                {...register("Afectacion")}
              />
            </div>

            <div>
              <label>DIRECCION DEL CLIENTE</label>
              <input {...register("Direccion")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>CIUDAD</label>
              <input {...register("Ciudad")} />
            </div>

            <div>
              <label>NOMBRE SDS</label>
              <input {...register("Nombre SDS")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>RED DE ACCESO (EQUIPO)</label>
              <input {...register("Red de Acceso")} />
            </div>

            <div>
              <label>PUERTO</label>
              <input {...register("Puerto")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>OT INSTALACIÓN</label>
              <input {...register("Ot Instalacion")} />
            </div>

            <div>
              <label>CONTACTO DEL CLIENTE</label>
              <input {...register("Contacto Cliente")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>HORARIO DE ATENCIÓN EMPRESA</label>
              <input
                defaultValue={"Lunes a Viernes 08:00 - 17:00"}
                {...register("Horario Atencion")}
              />
            </div>

            <div>
              <label>PERMISOS ESPECIALES</label>
              <input
                defaultValue={"NO SE REQUIERE"}
                {...register("Permisos")}
              />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>ACTIVIDAD PROGRAMADA O INMEDIATA</label>
              <input defaultValue={"INMEDIATA"} {...register("Actividad")} />
            </div>

            <div>
              <label>FECHA Y HORA DE LA VENTANA</label>
              <input defaultValue={"INMEDIATA"} {...register("Ventana")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>DESCRIPCIÓN DE LA ACTIVIDAD</label>
              <input {...register("Descripcion Actividad")} />
            </div>

            <div>
              <label>CONTACTO DE QUIEN REPORTA/ INGENIERO NOC</label>
              <input {...register("Contacto")} />
            </div>
          </div>

          <div className="Colx2">
            <div>
              <label>EXTENSIÓN</label>
              <input {...register("Extencion")} />
            </div>

            <div>
              <label>TAREA IM</label>
              <input {...register("Tarea Im")} />
            </div>
          </div>

          <input className="Button Red" type="submit" />
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

import React, { useRef, useState } from "react";
import toastr from "toastr";
import { FaArrowCircleDown } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { PlantillaWhatsapp1, PlantillaWhatsapp2 } from "../Data/Plantilla";
import "toastr/build/toastr.min.css";

function WhatsApp() {
  const [situacion, setSituacion] = useState();
  const { register, handleSubmit } = useForm();

  const FormRef = useRef();
  const [enviForm, setEnvioForm] = useState(false);
  const [Informacion, setInformacion] = useState({});

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
        {!enviForm ? (
          <form
            ref={FormRef}
            onSubmit={handleSubmit((data) => {
              setInformacion(data);
              setEnvioForm(true);
            })}
          >
              <h3>Generar Plantillas</h3>

            <div className="Campos">
              <input required placeholder="LLS" {...register("lls")} />
              <input
                required
                defaultValue={"01/01/2024"}
                placeholder="Fecha"
                type="date"
                {...register("fecha")}
              />
              <input
                required
                defaultValue={"11-13"}
                placeholder="Hora"
                {...register("hora")}
              />
              <input
                required
                placeholder="Nombre Cliente"
                {...register("nombre")}
              />
            </div>

            <div className="Campos">
              <input
                required
                placeholder="Celular Cliente"
                {...register("celular")}
              />
              <input
                required
                defaultValue="Servicio caído"
                placeholder="Evento"
                {...register("afectacion")}
              />
              <input
                required
                placeholder="Horarios de atencion"
                defaultValue="Lunes a Viernes 8AM - 6PM"
                {...register("horarios")}
              />
              <input
                required
                placeholder="Terminal Equipo"
                {...register("terminal")}
              />
            </div>

            <div className="Campos">
            <input
                required
                placeholder="Cuentas vecinas"
                defaultValue={"xxxxx-xxxxx-xxxxx"}
                {...register("vecinos")}
              />
            <input
                required
                placeholder="Correo Electronico"
                {...register("correo")}
              />
              <input
                required
                placeholder="Descripcion de la visita"
                {...register("descripcion")}
              />
            </div>

            <input required className="Button Red" type="submit" />
          </form>
        ) : (
          <div className="ResultadoPlantilla">
            <h2>proceso para generacion de visita</h2>
            <h4>Descripcion PQR</h4>
            <code onClick={copyToClipboard}>{`*LLS: ${Informacion.lls}* Fecha:${Informacion.fecha} Hora:${Informacion.hora} ${Informacion.nombre} ${Informacion.celular} ${Informacion.afectacion}: ${Informacion.descripcion}, ver carpeta F7 (${Informacion.terminal})`}</code>
            <h4>Notas F7 Genarales</h4>
            <input style={{textAlign: "center"}} defaultValue="TK XXXXXXXX-DIS-FMM" />
            <br />
            <code onClick={copyToClipboard}>
            {`Reporte de Falla: ${Informacion.afectacion} - Envió visita Horario de Atención en Sitio: ${Informacion.horarios}`} <br />
            {` Nombres y Apellidos: ${Informacion.nombre}`} <br />
            {` Celular: ${Informacion.celular}`} <br />
            {` Correo: no_aplica@claro.com.co`} <br />
            {` Cuentas asociadas: ${Informacion.vecinos}`} <br />
            {` Diagnóstico: *LLS: ${Informacion.lls} * ${Informacion.fecha} Hora:${Informacion.hora}  ${Informacion.nombre} Cel: ${Informacion.celular}`} <br />
            {` ${Informacion.afectacion}: ${Informacion.descripcion}`}
          </code>

          <h4>Notas F7 WhatsApp</h4>
          <code>*/*/ Soporte WhatsApp /*/*</code>
          <br /><br />
          <code>{` ${Informacion.afectacion}: ${Informacion.descripcion}`}</code>
          </div>
        )}
      </div>
    </div>
  );
}

export default WhatsApp;

import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function Form(props) {
  const { register, handleSubmit } = useForm();
  const FormRef = useRef();

  const EsVisita = props.accion === "visita";

  return (
    <>
      <h2>Proceso para generar {props.accion}</h2>

      {EsVisita && (
        <div className="Box-Lls">
          <textarea
            className="Tex-Lls"
            defaultValue={"SOPPY: RECIBE Nombre_XXXXX CEL: XXXXXXX SERVICIO CAÍDO Cliente indica que tiene problemas con su servicio, se realiza soporte primer nivel pero sigue sin funcionar, se genera visita (404)"}
          />
        </div>
      )}

      <form
        ref={FormRef}
        onSubmit={handleSubmit((data) => {
          props.setInformacion(data);
          props.setEnvioForm(true);
        })}
      >
        <div className="Campos">
          <input
            required
            placeholder={`${EsVisita ? "# LLS" : "INC"}`}
            {...register("lls")}
          />
          {EsVisita && (
            <>
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
            </>
          )}

          {!EsVisita && (
              <input
                required
                placeholder="Description Masiva"
                type="text"
                {...register("descmasiva")}
              />
          )}

          <input
            required
            placeholder="Nombre"
            {...register("nombre")}
          />
        </div>

        <div className="Campos">
          <input
            required
            placeholder="Celular"
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
            placeholder="Terminal"
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
            placeholder="E-Mail"
            {...register("correo")}
          />
          <input
            required
            placeholder="Descripcion problema"
            {...register("descripcion")}
          />
        </div>

        <input required className="Button Red" type="submit" />
      </form>
    </>
  );
}

export default Form;

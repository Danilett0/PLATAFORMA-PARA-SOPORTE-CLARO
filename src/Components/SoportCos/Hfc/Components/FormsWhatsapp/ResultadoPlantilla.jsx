import React from 'react'
import {copyToClipboard} from "../../../CopyText"

function ResultadoPlantilla({Informacion}) {


  const generarTitulo = (Informacion) => {
    let descPqr = Informacion.descmasiva ? "*INC*" : "*LLS:";
    descPqr += ` ${Informacion.lls}`;
    if (!Informacion.descmasiva) descPqr += " *";
    if (Informacion.descmasiva) descPqr += ` ${Informacion.descmasiva}`;
    if (Informacion.fecha) descPqr += ` Fecha: ${Informacion.fecha}`;
    if (Informacion.hora) descPqr += ` Hora: ${Informacion.hora}`;
    descPqr += ` ${Informacion.nombre} ${Informacion.celular} ${Informacion.afectacion}: ${Informacion.descripcion} (${Informacion.terminal}), ver carpeta F7`;
    return descPqr;
  };

  return (
    <div className="ResultadoPlantilla">
      {Informacion.descmasiva && (<h2>esto debe ser masiva</h2>) }
      <h4>Descripcion PQR</h4>
      <code onClick={copyToClipboard}>{generarTitulo(Informacion)}</code>
      <h4>Notas F7 Genarales</h4>
      <input style={{textAlign: "center", margin:"auto"}} defaultValue={`${Informacion.descmasiva ? "TK XXXXXXXX-DIS-FMS" : "TK XXXXXXXX-DIS-FMM"}`} />
      <br />
      <code onClick={copyToClipboard}>
        {`Reporte de Falla: ${Informacion.afectacion} - ${Informacion.descmasiva ? " Masiva " : " Envió visita "} Horario de Atención en Sitio: ${Informacion.horarios}`} <br />
        {` Nombres y Apellidos: ${Informacion.nombre}`} <br />
        {` Celular: ${Informacion.celular}`} <br />
        {` Correo: ${Informacion.correo}`} <br />
        {` Cuentas asociadas: ${Informacion.vecinos}`} <br />
        {` Diagnóstico: ${Informacion.descmasiva ? " *INC*" : " *LLS: "}  ${Informacion.descmasiva ? Informacion.descmasiva : Informacion.lls + "*"} ${Informacion.fecha} Hora:${Informacion.hora}  ${Informacion.nombre} Cel: ${Informacion.celular}`} <br />
        {` ${Informacion.afectacion}: ${Informacion.descripcion}`}
      </code>  
      <h4>Notas F7 WhatsApp</h4>
      <code onClick={copyToClipboard}>*/*/ Soporte WhatsApp /*/*</code>
      <br /><br />
      <code onClick={copyToClipboard}>{` ${Informacion.afectacion}: ${Informacion.descripcion}`}</code>
    </div>
  )
}

export default ResultadoPlantilla


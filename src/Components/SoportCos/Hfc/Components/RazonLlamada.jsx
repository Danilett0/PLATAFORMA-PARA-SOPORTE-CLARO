import React from "react";

function RazonLlamada(props) {
  return (
    <div className="MainRazonLlamada">
      <div className="Box-Razones">
        <div className="Bloque">
          <h3>Internet</h3>
          <div>
            {" "}
            <span>B1 </span> CLIENTE SIN SOLUCION
          </div>
          <div>
            {" "}
            <span>B7 </span> SOLICITUD AJUSTE WIFI
          </div>
          <div>
            {" "}
            <span>FTI</span> FALLA INTERNET FTTH{" "}
          </div>
          <div>
            {" "}
            <span>I1 </span> BANDA ANCHA PROBLEMA APROVISIONAMIENTO
          </div>
          <div>
            {" "}
            <span>I2 </span> BANDA ANCHA PROBLEMA WIFI
          </div>
          <div>
            {" "}
            <span>I3 </span> LENTITUD
          </div>
          <div>
            {" "}
            <span>I4 </span> EQUIPOS CLIENTE
          </div>
          <div>
            {" "}
            <span>I5 </span> MODEM DESENGANCHADO
          </div>
          <div>
            {" "}
            <span>I6 </span> SEÑAL DESFAZADA
          </div>
          <div>
            {" "}
            <span>I7 </span> INTERMITENTE NIVEL OK
          </div>
          <div>
            {" "}
            <span>MD </span> FALLA INTERNET WTTH
          </div>

          <h3>Otros</h3>
          <div>
            {" "}
            <span>C31</span>REINCIDENTE SOPORTE
          </div>
          <div>
            {" "}
            <span>P1 </span>CLIENTE NO ACEPTA SOPORTE
          </div>
          <div>
            {" "}
            <span>C01</span>SERVICIO OK CLIENTE MANIFIESTA FALLA
          </div>
          <div>
            {" "}
            <span>C38</span>VERIFICACIÓN CANAL PETICIÓN CLIENTE
          </div>
        </div>

        <div className="Bloque">
          <h3>Telefonia</h3>
          <div>
            {" "}
            <span> C1 </span>SINTONO NIVEL OK
          </div>
          <div>
            {" "}
            <span> C2 </span>CITOFONIA/PBX HFC CITOFONIA
          </div>
          <div>
            {" "}
            <span> V3 </span>SIN TONO - MTA DESENGANCHADO
          </div>
          <div>
            {" "}
            <span> V4 </span>PROBLEMA SEÑAL DESFAZADA RF
          </div>
          <div>
            {" "}
            <span> V5 </span>PROBLEMAS CALIDAD NIVELES OK
          </div>

          <h3>Television</h3>
          <div>
            {" "}
            <span> FTT </span>FALLA TV FTTH
          </div>
          <div>
            {" "}
            <span> MD </span> FALLA TV DTH
          </div>
          <div>
            {" "}
            <span> T1 </span> PROBLEMA ANALOGA
          </div>
          <div>
            {" "}
            <span> T4 </span> PROBLEMA DVB DIGITAL
          </div>

          <h3>DOBLE PLAY</h3>
          <div>
            {" "}
            <span> FTH </span>FALLA GENERAL FTTH
          </div>
          <div>
            {" "}
            <span> IT </span> FALLOS EN INTERNET y TELEFONIA
          </div>
          <div>
            {" "}
            <span> TT </span> FALLAS TV y TELEFONIA
          </div>
          <div>
            {" "}
            <span> TI </span> FALLA TV - INTERNET
          </div>
          <div>
            {" "}
            <span> MD </span> FALLA TV - INTERNET WTTH/DTH
          </div>
        </div>
      </div>
    </div>
  );
}

export default RazonLlamada;

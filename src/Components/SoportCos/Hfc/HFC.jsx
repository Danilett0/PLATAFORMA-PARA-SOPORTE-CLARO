import React, { useState } from "react";
import RazonLlamada from "./Components/RazonLlamada";
import Tipologia from "./Components/Tipologia";
import Comandos from "./Components/Comandos";
import Plantillas from "./Components/Plantillas";
import Botones from "./Components/Botones";

function HFC() {
  const [razonLlamada, SetRazonLlamada] = useState(false);
  const [tipologia, SetTipologia] = useState(false);
  const [confAvan, SetConfAvan] = useState(false);
  const [comandos, SetComandos] = useState(false);
  const [ipFija, SetIpFija] = useState(false);
  const [plantillas, setPlantillas] = useState(false);

  const ResetModulos = () => {
    SetIpFija(false);
    SetRazonLlamada(false);
    SetTipologia(false);
    SetConfAvan(false);
    SetComandos(false);
    setPlantillas(false);
  };

  return (
    <div className="MainHfc">
      
      <h2>HFC 🐰</h2>
      <h4>¿Qué te gustaria revisar?</h4>

      <Botones
        ResetModulos={ResetModulos}
        SetIpFija={SetIpFija}
        SetRazonLlamada={SetRazonLlamada}
        SetTipologia={SetTipologia}
        SetConfAvan={SetConfAvan}
        SetComandos={SetComandos}
        setPlantillas={setPlantillas}
      />

      {razonLlamada && <RazonLlamada />}

      {tipologia && <Tipologia />}

      {confAvan && (
        <div className="MainRazonLlamada">
          <div className="Box-Razones">
            <div className="Bloque">
              <div>
                <span>DMZ</span> <b>IP VALIDA</b>
              </div>
              <div>
                <span>FORWARDING</span> <b>PUERTO + PROTOCOLO</b>
              </div>
              <div>
                <span>PORT FORWARDING</span>
                <b>PUERTO + PROTOCOLO + IP PRIVADA</b>
              </div>
              <div>
                <span>PASSTHROUGH</span> <b>MAC</b>
              </div>
            </div>
          </div>
        </div>
      )}

      {comandos && <Comandos />}

      {ipFija && (
        <div className="MainRazonLlamada">
          <div className="Box-Razones">
            <div className="Bloque">
              <div>
                <span>IP FIJA</span> <b>IP ASIGNADA (192.197.143.20)</b>
              </div>
              <div>
                <span>MASCARA</span> <b>255.255.255.0</b>
              </div>
              <div>
                <span>PUERTA ENLACE</span>
                <b> IP TERMINADA EN 1 (192.197.143.1)</b>
              </div>
              <div>
                <span>DNS1</span> <b>190.157.8.33</b>
              </div>
              <div>
                <span>DNS2</span> <b>190.157.8.1</b>
              </div>
            </div>
          </div>
        </div>
      )}

      {plantillas && <Plantillas />}
    </div>
  );
}

export default HFC;

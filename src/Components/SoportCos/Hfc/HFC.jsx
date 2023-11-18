import React, { useState } from "react";
import RazonLlamada from "./Components/RazonLlamada";
import Tipologia from "./Components/Tipologia";
import Comandos from "./Components/Comandos";
import Botones from "./Components/Botones";

function HFC() {
  const [razonLlamada, SetRazonLlamada] = useState(false);
  const [perfilEscala, SetPerfilEscala] = useState(false);
  const [tipologia, SetTipologia] = useState(false);
  const [confAvan, SetConfAvan] = useState(false);
  const [comandos, SetComandos] = useState(false);
  const [ipFija, SetIpFija] = useState(false);

  const ResetModulos = () => {
    SetIpFija(false);
    SetRazonLlamada(false);
    SetPerfilEscala(false);
    SetTipologia(false);
    SetConfAvan(false);
    SetComandos(false);
  };

  return (
    <div className="MainHfc">
      <Botones
        ResetModulos={ResetModulos}
        SetIpFija={SetIpFija}
        SetRazonLlamada={SetRazonLlamada}
        SetPerfilEscala={SetPerfilEscala}
        SetTipologia={SetTipologia}
        SetConfAvan={SetConfAvan}
        SetComandos={SetComandos}
      />

      {razonLlamada && <RazonLlamada />}

      {perfilEscala && (
        <div className="MainRazonLlamada">
          <div className="Box-Razones">
            <div className="Bloque">
              <div>
                <span>Visitas</span> SERVIDES1
              </div>
              <div>
                <span>Otros</span> SOPNROCCID
              </div>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
}

export default HFC;

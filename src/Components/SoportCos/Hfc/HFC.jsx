import React, { useState } from "react";
import RazonLlamada from "./Components/RazonLlamada";
import Tipologia from "./Components/Tipologia";
import Comandos from "./Components/Comandos";
import Plantillas from "./Components/Plantillas";
import Buttons from "./Components/Buttons";
import ConfAvanzadas from "./Components/ConfAvanzadas";
import IpFija from "../Hfc/Components/IpFija";

function HFC() {
  const [razonLlamada, SetRazonLlamada] = useState(false);
  const [tipologia, SetTipologia] = useState(false);
  const [confAvan, SetConfAvan] = useState(false);
  const [comandos, Setcommands] = useState(false);
  const [ipFija, SetIpFija] = useState(false);
  const [plantillas, setPlantillas] = useState(false);

  const ResetModulos = () => {
    SetIpFija(false);
    SetRazonLlamada(false);
    SetTipologia(false);
    SetConfAvan(false);
    Setcommands(false);
    setPlantillas(false);
  };

  return (
    <div className="mainHfc">
      <h2>HFC 🐰</h2>
      <h4>¿Qué te gustaria revisar?</h4>

      <Buttons
        ResetModulos={ResetModulos}
        SetIpFija={SetIpFija}
        SetRazonLlamada={SetRazonLlamada}
        SetTipologia={SetTipologia}
        SetConfAvan={SetConfAvan}
        Setcommands={Setcommands}
        setPlantillas={setPlantillas}
      />

      {razonLlamada && <RazonLlamada />}
      {tipologia && <Tipologia />}
      {confAvan && <ConfAvanzadas />}
      {comandos && <Comandos />}
      {ipFija && <IpFija />}
      {plantillas && <Plantillas />}
    </div>
  );
}

export default HFC;

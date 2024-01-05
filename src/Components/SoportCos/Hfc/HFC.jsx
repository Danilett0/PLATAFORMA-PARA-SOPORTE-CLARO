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
      <Buttons
        ResetModulos={ResetModulos}
        SetIpFija={SetIpFija}
        ipFija={ipFija}
        SetRazonLlamada={SetRazonLlamada}
        razonLlamada={razonLlamada}
        SetTipologia={SetTipologia}
        tipologia={tipologia}
        SetConfAvan={SetConfAvan}
        confAvan={confAvan}
        Setcommands={Setcommands}
        comandos={comandos}
        setPlantillas={setPlantillas}
        plantillas={plantillas}
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

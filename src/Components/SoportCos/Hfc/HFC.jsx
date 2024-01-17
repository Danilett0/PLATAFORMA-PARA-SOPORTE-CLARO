import React, { useState } from "react";
import RazonLlamada from "./Components/RazonLlamada";
import Tipologia from "./Components/Tipologia";
import Comandos from "./Components/Comandos";
import Plantillas from "./Components/Plantillas";
import Buttons from "./Components/Buttons";
import ConfAvanzadas from "./Components/ConfAvanzadas";
import IpFija from "../Hfc/Components/IpFija";
import WhatsApp from "./Components/WhatsApp";

function HFC() {
  const [razonLlamada, SetRazonLlamada] = useState(false);
  const [tipologia, SetTipologia] = useState(false);
  const [confAvan, SetConfAvan] = useState(false);
  const [comandos, Setcommands] = useState(false);
  const [ipFija, SetIpFija] = useState(false);
  const [plantillas, setPlantillas] = useState(false);
  const [whatsApp, setWhatsApp] = useState(false);

  const ResetModulos = () => {
    SetIpFija(false);
    SetRazonLlamada(false);
    SetTipologia(false);
    SetConfAvan(false);
    Setcommands(false);
    setPlantillas(false);
    setWhatsApp(false)
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
        whatsApp={whatsApp}
        setWhatsApp={setWhatsApp}
      />

      {razonLlamada && <RazonLlamada />}
      {tipologia && <Tipologia />}
      {confAvan && <ConfAvanzadas />}
      {comandos && <Comandos />}
      {ipFija && <IpFija />}
      {plantillas && <Plantillas />}
      {whatsApp && <WhatsApp />}
    </div>
  );
}

export default HFC;

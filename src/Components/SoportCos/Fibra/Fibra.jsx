import React, { useState } from "react";
import Gpon from "./Gpon/Gpon";
import P2p from "./PSP/P2p";
import Plantilla from "./Components/PlantMasiva";
import KmCierre from "./Components/KmCierre";
import Buttons from "./Components/Buttons";
import IpFija from "./Components/IpFija";

function Fibra() {
  const [gpon, setGpon] = useState(false);
  const [p2p, setP2p] = useState(false);
  const [plantilla, setPlantilla] = useState(false);
  const [Km, setKm] = useState(false);
  const [Ip, setIp] = useState(false);

  const resetStates = () => {
    setGpon(false);
    setP2p(false);
    setPlantilla(false);
    setKm(false);
    setIp(false);
  };

  return (
    <div className="mainFibraOptica">
      <div className="EncabezadoFibra">
        <h2>Fibra 😏</h2>
        <h4>¿Qué te gustaria revisar?</h4>

        <Buttons
          resetStates={resetStates}
          setGpon={setGpon}
          setP2p={setP2p}
          setPlantilla={setPlantilla}
          setKm={setKm}
          setIpFija={setIp}
        />
      </div>

      <div>
        {gpon && <Gpon />}
        {p2p && <P2p />}
        {plantilla && <Plantilla />}
        {Ip && <IpFija />}
        {Km && <KmCierre />}
      </div>
    </div>
  );
}

export default Fibra;

import React, { useState } from "react";
import Gpon from "./Gpon/Gpon";
// import P2p from "./PSP/P2p";
import PlantaExterna from "./Components/PlantaExterna";
import KmCierre from "./Components/KmCierre";
import Buttons from "./Components/Buttons";
// import IpFija from "./Components/IpFija";
import Plantillas from "./Components/Plantillas";

function Fibra() {
  const [gpon, setGpon] = useState(false);
  // const [p2p, setP2p] = useState(false);
  const [plantaExterna, setPlantaExterna] = useState(false);
  const [Km, setKm] = useState(false);
  // const [Ip, setIp] = useState(false);
  const [plantillas, setPlantillas] = useState(false);

  const resetStates = () => {
    setGpon(false);
    // setP2p(false);
    setPlantaExterna(false);
    setKm(false);
    // setIp(false);
    setPlantillas(false);
  };

  return (
    <div className="mainFibraOptica">
      <div className="EncabezadoFibra">
        <h2>Fibra 😏</h2>
        <h4>¿Qué te gustaria revisar?</h4>

        <Buttons
          resetStates={resetStates}
          setGpon={setGpon}
          // setP2p={setP2p}
          setPlantaExterna={setPlantaExterna}
          setKm={setKm}
          // setIpFija={setIp}
          setPlantillas={setPlantillas}
        />
      </div>

      <div>
        {gpon && <Gpon />}
        {/* {p2p && <P2p />} */}
        {plantaExterna && <PlantaExterna />}
        {/* {Ip && <IpFija />} */}
        {Km && <KmCierre />}
        {plantillas && <Plantillas />}
      </div>
    </div>
  );
}

export default Fibra;

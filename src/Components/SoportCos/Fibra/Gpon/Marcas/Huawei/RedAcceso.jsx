import React, { useRef, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import {copyToClipboard} from "../../../../CopyText"

function RedAcceso() {
  const [firtsComan, setFirtsComan] = useState(false);
  const [enlace, setenlace] = useState("");
  const [ServPort, setServPort] = useState("");
  const [Puertos, setPuertos] = useState("");
  const InputenlaceRef = useRef();
  const InpServPortRef = useRef();
  const InpRackRef = useRef();
  const InpSlotRef = useRef();
  const InpPuertoRef = useRef();
  const InpOnuRef = useRef();

  const Valenlace = () => {
    const valorInput = InputenlaceRef.current.value.trim();

    if (valorInput !== undefined && valorInput !== "") {
      setFirtsComan(true);
      setenlace(InputenlaceRef.current.value);
    } else {
      setFirtsComan("");
      setenlace("");
      setServPort("");
      setPuertos("");
    }
  };

  const ValServicePort = () => {
    const valorInput = InpServPortRef.current.value.trim();

    if (valorInput !== undefined && valorInput !== "") {
      setServPort(InpServPortRef.current.value);
    } else {
      setServPort("");
      setPuertos("");
    }
  };

  const ValPuertos = () => {
    const rack = InpRackRef.current.value.trim();
    const slot = InpSlotRef.current.value.trim();
    const port = InpPuertoRef.current.value.trim();
    const onu = InpOnuRef.current.value.trim();

    if (rack && slot && port && onu) {
      setPuertos(`${rack}/${slot}/${port}/${onu}`);
    } else {
      setPuertos("");
      alert("Complete todos los datos para continuar");
    }
  };

  return (
    <div className="equipmentBrandselected">

      <h3>
        Enlace <span>del servicio</span>
      </h3>

      <div className="enlace">
        <input
          ref={InputenlaceRef}
          onChange={Valenlace}
          type="text"
          placeholder="AGOU001"
        />
      </div>

      <div className="commands">
        {firtsComan && (
          <>
            <p>Service Port</p>
            <code onClick={copyToClipboard}>
              display current-configuration | include {enlace}
            </code>
            <div className="enlace">
              <input
                ref={InpServPortRef}
                type="text"
                placeholder="Service Port"
                onChange={ValServicePort}
              />
            </div>

            {ServPort && (
              <>
                <p>Puertos</p>
                <code onClick={copyToClipboard}>
                  display service-port {ServPort}
                </code>
                <div className="Puertos">
                  <div className="inpPuertos">
                    <input ref={InpRackRef} placeholder="rack" type="text" />
                    <input ref={InpSlotRef} placeholder="slot" type="text" />
                    <input
                      ref={InpPuertoRef}
                      placeholder="puerto"
                      type="text"
                    />
                    <input ref={InpOnuRef} placeholder="onu" type="text" />
                  </div>
                  <button onClick={ValPuertos} className="Button Green">
                    <BsCheckCircleFill size={20} />
                  </button>
                </div>

                {Puertos && (
                  <>
                    <br />
                    <p>Informacion, Potencias, Alarmas, Vecinos</p>

                    <code onClick={copyToClipboard}>
                      display current-configuration service-port {ServPort}
                    </code>

                    <code onClick={copyToClipboard}>
                      display service-port port{"\u00A0\u00A0"}
                      {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                        Puertos.split("/")[2]
                      }`}
                    </code>

                    <br />

                    <code onClick={copyToClipboard}>config</code>
                    <code onClick={copyToClipboard}>
                      interface gpon{" "}
                      {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}`}
                    </code>
                    <code onClick={copyToClipboard}>
                      display ont optical-info{" "}
                      {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}
                    </code>
                    <code onClick={copyToClipboard}>
                      display ont alarm-state{" "}
                      {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}
                    </code>
                    <code onClick={copyToClipboard}>
                      display ont info{" "}
                      {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}
                    </code>
                    <code onClick={copyToClipboard}>
                      display ont port state{" "}
                      {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}{" "}
                      eth-port all
                    </code>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default RedAcceso;

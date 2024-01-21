import React, { useState, useRef } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import {copyToClipboard} from "../../../../CopyText"

function RedAcceso() {
  const [firtsComan, setFirtsComan] = useState(false);

  const [enlace, setenlace] = useState("");
  const [Puertos, setPuertos] = useState("");
  const InputenlaceRef = useRef();
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
      setPuertos("");
    }
  };

  const ValPuertos = () => {
    const rack = InpRackRef.current.value;
    const slot = InpSlotRef.current.value;
    const port = InpPuertoRef.current.value;
    const onu = InpOnuRef.current.value;

    if (rack && slot && port && onu) {
      setPuertos(`${rack}/${slot}/${port}/${onu}`);
    } else {
      setPuertos("");
      alert("Complete todos los datos para continuar");
    }
  };

  return (
    <div>
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
            <p>Info, validacion clientes OLT</p>
            <code onClick={copyToClipboard}>
              show running-config | begin {enlace}
            </code>

            <p>Puertos</p>

            <div className="Puertos">
              <div className="inpPuertos">
                <input ref={InpRackRef} placeholder="rack" type="text" />
                <input ref={InpSlotRef} placeholder="slot" type="text" />
                <input ref={InpPuertoRef} placeholder="port" type="text" />
                <input ref={InpOnuRef} placeholder="onu" type="text" />
              </div>
              <button onClick={ValPuertos} className="Button Green">
                <BsCheckCircleFill size={20} />
              </button>
            </div>

            {Puertos && (
              <>
                <p>Potencias, Alarmas, Vecinos</p>

                <code onClick={copyToClipboard}>
                  show gpon onu state gpon_olt-
                  {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                    Puertos.split("/")[2]
                  }`}
                </code>
                <code onClick={copyToClipboard}>
                  show pon power onu-rx gpon_olt-
                  {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                    Puertos.split("/")[2]
                  }`}
                </code>
                <code onClick={copyToClipboard}>
                  sh pon power attenuation gpon_onu-
                  {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                    Puertos.split("/")[2]
                  }:${Puertos.split("/")[3]}`}
                </code>
                <code onClick={copyToClipboard}>
                  show gpon onu state gpon_olt-
                  {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                    Puertos.split("/")[2]
                  } ${Puertos.split("/")[3]}`}
                </code>
                <code onClick={copyToClipboard}>
                  show pon onu information gpon_onu-
                  {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                    Puertos.split("/")[2]
                  }:${Puertos.split("/")[3]}`}
                </code>
                <code onClick={copyToClipboard}>
                  show running-config-interface vport-
                  {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                    Puertos.split("/")[2]
                  }.${Puertos.split("/")[3]}:1`}
                </code>
                <code onClick={copyToClipboard}>
                  sh running-config-interface gpon_onu-
                  {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                    Puertos.split("/")[2]
                  }:${Puertos.split("/")[3]}`}
                </code>
                <code onClick={copyToClipboard}>
                  show mac interface vport-
                  {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                    Puertos.split("/")[2]
                  }.${Puertos.split("/")[3]}:1`}
                </code>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default RedAcceso;

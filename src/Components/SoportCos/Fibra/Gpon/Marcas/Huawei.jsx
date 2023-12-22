import React, { useRef, useState } from "react";
import {
  BsFillTelephoneFill,
  BsLaptop,
  BsCheckCircleFill,
} from "react-icons/bs";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Huawei() {
  const [firtsComan, setFirtsComan] = useState(false);
  const [ipValida, SetIpvalida] = useState("");
  const [ipWan, SetIpWan] = useState("");
  const [enlace, setenlace] = useState("");
  const [ServPort, setServPort] = useState("");
  const [Puertos, setPuertos] = useState("");
  const [telefonia, setTelefonia] = useState(false);
  const [internet, setInternet] = useState(false);
  const InputenlaceRef = useRef();
  const InpServPortRef = useRef();
  const InpRackRef = useRef();
  const InpSlotRef = useRef();
  const InpPuertoRef = useRef();
  const InpOnuRef = useRef();
  const InpIpValRef = useRef();
  const InpIpWanRef = useRef();

  const copyToClipboard = (e) => {
    navigator.clipboard
      .writeText(e.target.innerText)
      .then(() => {
        toastr.success("Texto copiado al portapapeles");
      })
      .catch((err) => console.error("Error al copiar el texto: ", err));
  };

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
      toastr.info("Complete todos los datos para continuar");
    }
  };

  const ValIpValida = () => {
    const valorInput = InpIpValRef.current.value.trim();

    if (valorInput !== undefined && valorInput !== "") {
      SetIpvalida(InpIpValRef.current.value);
    } else {
      SetIpvalida("");
      SetIpWan("");
    }
  };

  const ValIpWan = () => {
    const valorInput = InpIpWanRef.current.value.trim();

    if (valorInput !== undefined && valorInput !== "") {
      SetIpWan(InpIpWanRef.current.value);
    } else {
      SetIpWan("");
    }
  };

  return (
    <div className="equipmentBrandselected">
      <h3>
        validacion <span> red de acceso HUAWEI</span>
      </h3>

      <div className="enlace">
        <input
          ref={InputenlaceRef}
          onChange={Valenlace}
          type="text"
          placeholder="enlace"
        />
      </div>

      <div className="commands">
        {firtsComan && (
          <>
            <p>PASO 1 (Validacion Service Port )</p>
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
                <p>PASO 2 (Validacion de Puertos)</p>
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
                    {/* <p>PASO 3 (Informacion Puertos y ONT)</p>
                    <code onClick={copyToClipboard} >
                      display service-port port {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}`}
                    </code>
                    <code onClick={copyToClipboard} >
                      display current-configuration ont {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}
                    </code> */}

                    <p>PASO 3 (Validar Potencias y Alarmas)</p>
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

                    <h3>
                      validacion<span> Ruta Ping</span>
                    </h3>

                    <div className="Ips">
                      <input
                        ref={InpIpValRef}
                        onChange={ValIpValida}
                        type="text"
                        placeholder="IP VALIDA"
                      />
                    </div>

                    {ipValida && (
                      <>
                        <code
                          onClick={copyToClipboard}
                          style={{ margin: "10px 0px" }}
                        >
                          show ip rou vrf pymes-internet {ipValida}
                        </code>

                        <div className="Ips">
                          <input
                            ref={InpIpWanRef}
                            type="text"
                            placeholder="IP WAN"
                            onChange={ValIpWan}
                          />
                        </div>
                        {ipWan && (
                          <>
                            <h3 className="commandsTitle">
                              Seleccione Tecnologia
                            </h3>

                            <div className="iconOptions">
                              <BsLaptop
                                onClick={() => {
                                  setInternet(true);
                                  setTelefonia(false);
                                }}
                                title="commands Internet"
                              />
                              <BsFillTelephoneFill
                                onClick={() => {
                                  setInternet(false);
                                  setTelefonia(true);
                                }}
                                title="commands Telefonia"
                              />
                            </div>

                            {internet && (
                              <div className="commandsIps">
                                <div>
                                  <h4>
                                    NODO <span> A1K</span>
                                  </h4>
                                  <code onClick={copyToClipboard}>
                                    show run vrf pymes-internet | inc {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    show run interface{" "}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    ping vrf pymes-internet {ipWan}{" "}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    ping vrf pymes-internet {ipWan} re 1500
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    show arp vrf pymes-internet {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    <span>Acceso Router:</span> telnet {ipWan}{" "}
                                    /vrf pymes-internet
                                  </code>
                                </div>

                                <div>
                                  <h4>
                                    NODO <span>A9K</span>
                                  </h4>
                                  <code onClick={copyToClipboard}>
                                    show run router static vrf pymes-internet |
                                    inc {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    show run interface PuertoLogico
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    ping vrf pymes-internet {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    ping vrf pymes-internet {ipWan} co 1500
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    show arp vrf pymes-internet {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    <span>Acceso Router:</span> telnet vrf
                                    pymes-internet {ipWan}
                                  </code>
                                </div>
                              </div>
                            )}

                            {telefonia && (
                              <div className="commandsIps">
                                <div>
                                  <h4>
                                    NODO <span> A1K</span>
                                  </h4>
                                  <code onClick={copyToClipboard}>
                                    sh ip rou vrf ims-sbc-ippbx {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    show run interface PuertoLogico
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    ping vrf ims-sbc-ippbx {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    show arp vrf ims-sbc-ippbx {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    <span>Acceso Router:</span> telnet {ipWan}{" "}
                                    /vrf ims-sbc-ippbx
                                  </code>
                                </div>

                                <div>
                                  <h4>
                                    NODO <span>A9K</span>
                                  </h4>
                                  <code onClick={copyToClipboard}>
                                    sh ip rou vrf ims-sbc-ippbx {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    show run interface PuertoLogico
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    ping vrf ims-sbc-ippbx {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    show arp vrf ims-sbc-ippbx {ipWan}
                                  </code>
                                  <code onClick={copyToClipboard}>
                                    <span>Acceso Router:</span> telnet vrf
                                    ims-sbc-ippbx {ipWan}
                                  </code>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}
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

export default Huawei;

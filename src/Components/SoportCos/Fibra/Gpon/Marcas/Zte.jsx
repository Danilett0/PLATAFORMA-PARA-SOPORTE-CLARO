import React, { useState, useRef } from "react";
import {
  BsFillTelephoneFill,
  BsLaptop,
  BsCheckCircleFill,
} from "react-icons/bs";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Zte() {
  const [firtsComan, setFirtsComan] = useState(false);
  const [ipValida, SetIpvalida] = useState("");
  const [ipWan, SetIpWan] = useState("");
  const [enlace, setenlace] = useState("");
  const [Puertos, setPuertos] = useState("");
  const [telefonia, setTelefonia] = useState(false);
  const [internet, setInternet] = useState(false);
  const InputenlaceRef = useRef();
  const InpRackRef = useRef();
  const InpSlotRef = useRef();
  const InpPuertoRef = useRef();
  const InpOnuRef = useRef();
  const InpIpValRef = useRef();
  const InpIpWanRef = useRef();

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e.target.innerText)
      .then(() => {
        toastr.success("Texto Copiado al Portapapeles")
      })
      .catch(err => console.error('Error al copiar el texto: ', err));
  };


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
        validacion <span> red de acceso ZTE</span>
      </h3>

      <div className="enlace">
        <input ref={InputenlaceRef} onChange={Valenlace} type="text" placeholder="enlace" />
      </div>

      <div className="commands">
        {firtsComan && (
          <>
            <p>PASO 1 (Info, Validacion Clientes OLT)</p>
            <code onClick={copyToClipboard} >show running-config | begin {enlace}</code>

            <p>PASO 2 (Validacion Puertos)</p>

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
                <p>PASO 3 (Validar Potencias y Alarmas)</p>

                <code onClick={copyToClipboard} >show gpon onu state gpon_olt-{`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}`}</code>
                <code onClick={copyToClipboard} >show pon power onu-rx gpon_olt-{`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}`}</code>
                <code onClick={copyToClipboard} >sh pon power attenuation gpon_onu-{`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}:${Puertos.split("/")[3]}`}</code>
                <code onClick={copyToClipboard} >show gpon onu state gpon_olt-{`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}</code>
                <code onClick={copyToClipboard} >show pon onu information gpon_onu-{`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}:${Puertos.split("/")[3]}`}</code>
                <code onClick={copyToClipboard} >show running-config-interface vport-{`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}.${Puertos.split("/")[3]}:1`}</code>
                <code onClick={copyToClipboard} >sh running-config-interface gpon_onu-{`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}:${Puertos.split("/")[3]}`}</code>
                <code onClick={copyToClipboard} >show mac interface vport-{`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}.${Puertos.split("/")[3]}:1`}
                </code>

                <p style={{ marginTop: "20px" }}>PASO 4</p>

                <h3 style={{ marginTop: "20px" }}>validacion<span> Ruta Ping</span></h3>

                <div className="Ips">
                  <input ref={InpIpValRef} onChange={ValIpValida} type="text" placeholder="IP VALIDA" />
                </div>

                {ipValida && (
                  <>
                    <code onClick={copyToClipboard}  style={{ margin: "10px 0px" }}> show ip rou vrf pymes-internet {ipValida} </code>

                    <div className="Ips">
                      <input ref={InpIpWanRef} onChange={ValIpWan} type="text" placeholder="IP WAN"/>
                    </div>
                    {ipWan && (
                      <>
                        <h3 className="commandsTitle">Seleccione Tecnologia</h3>

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
                              <h4>NODO <span> A1K</span></h4>

                              <code onClick={copyToClipboard} >show run vrf pymes-internet | inc {ipWan}</code>
                              <code onClick={copyToClipboard} >show run interface PuertoLogico</code>
                              <code onClick={copyToClipboard} >ping vrf pymes-internet {ipWan} </code>
                              <code onClick={copyToClipboard} >ping vrf pymes-internet {ipWan} re 1500</code>
                              <code onClick={copyToClipboard} >show arp vrf pymes-internet {ipWan} </code>
                              <code onClick={copyToClipboard} ><span>Acceso Router:</span> telnet {ipWan} /vrf pymes-internet</code>
                            </div>

                            <div>
                              <h4>NODO <span>A9K</span></h4>

                              <code onClick={copyToClipboard} >show run router static vrf pymes-internet | inc {ipWan}</code>
                              <code onClick={copyToClipboard} >show run interface PuertoLogico</code>
                              <code onClick={copyToClipboard} >ping vrf pymes-internet {ipWan}</code>
                              <code onClick={copyToClipboard} >ping vrf pymes-internet {ipWan} co 1500</code>
                              <code onClick={copyToClipboard} >show arp vrf pymes-internet {ipWan}</code>
                              <code onClick={copyToClipboard} ><span>Acceso Router:</span> telnet vrf pymes-internet {ipWan}</code>
                            </div>
                          </div>
                        )}

                        {telefonia && (
                          <div className="commandsIps">
                            <div>
                              <h4>NODO <span> A1K</span></h4>
                              <code onClick={copyToClipboard} >sh ip rou vrf ims-sbc-ippbx {ipWan}</code>
                              <code onClick={copyToClipboard} >show run interface PuertoLogico</code>
                              <code onClick={copyToClipboard} >ping vrf ims-sbc-ippbx {ipWan}</code>
                              <code onClick={copyToClipboard} >show arp vrf ims-sbc-ippbx {ipWan}</code>
                              <code onClick={copyToClipboard} ><span>Acceso Router:</span> telnet {ipWan} /vrf ims-sbc-ippbx</code>
                            </div>

                            <div>
                              <h4>NODO <span>A9K</span></h4>
                              <code onClick={copyToClipboard} >sh ip rou vrf ims-sbc-ippbx {ipWan}</code>
                              <code onClick={copyToClipboard} >show run interface PuertoLogico</code>
                              <code onClick={copyToClipboard} >ping vrf ims-sbc-ippbx {ipWan}</code>
                              <code onClick={copyToClipboard} >show arp vrf ims-sbc-ippbx {ipWan}</code>
                              <code onClick={copyToClipboard} ><span>Acceso Router:</span> telnet vrf ims-sbc-ippbx {ipWan}</code>
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
      </div>
    </div>
  );
}

export default Zte;

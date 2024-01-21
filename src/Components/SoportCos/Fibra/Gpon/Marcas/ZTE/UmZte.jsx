import React, { useState, useRef } from "react";
import { BsFillTelephoneFill, BsLaptop } from "react-icons/bs";
import {copyToClipboard} from "../../../../CopyText"

function UmZte() {
  const [ipValida, SetIpvalida] = useState("");
  const [ipWan, SetIpWan] = useState("");

  const [telefonia, setTelefonia] = useState(false);
  const [internet, setInternet] = useState(false);

  const InpIpWanRef = useRef();
  const InpIpValRef = useRef();

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
    <div className="commands">
      <h3 style={{ marginTop: "20px" }}>
        IP<span> VALIDA</span>
      </h3>

      <div className="Ips">
        <input
          ref={InpIpValRef}
          onChange={ValIpValida}
          type="text"
          placeholder="198.234.65.10"
        />
      </div>

      {ipValida && (
        <>
          <code onClick={copyToClipboard} style={{ margin: "10px 0px" }}>
            {" "}
            show ip rou vrf pymes-internet {ipValida}{" "}
          </code>

          <div className="Ips">
            <input
              ref={InpIpWanRef}
              onChange={ValIpWan}
              type="text"
              placeholder="IP WAN"
            />
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
                    <h4>
                      NODO <span> A1K</span>
                    </h4>

                    <code onClick={copyToClipboard}>
                      show run vrf pymes-internet | inc {ipWan}
                    </code>
                    <code>
                      <span>Puerto Logico</span>{" "}
                      <i onClick={copyToClipboard}>show run interface</i>
                    </code>
                    <code onClick={copyToClipboard}>
                      <span>ping vrf pymes-internet {ipWan}</span>
                    </code>
                    <code onClick={copyToClipboard}>
                      ping vrf pymes-internet {ipWan} re 1500
                    </code>
                    <code onClick={copyToClipboard}>
                      show arp vrf pymes-internet {ipWan}{" "}
                    </code>
                    <code onClick={copyToClipboard}>
                      telnet {ipWan} /vrf pymes-internet
                    </code>
                  </div>

                  <div>
                    <h4>
                      NODO <span>A9K</span>
                    </h4>

                    <code onClick={copyToClipboard}>
                      show run router static vrf pymes-internet | inc {ipWan}
                    </code>
                    <code>
                      <span>Puerto Logico</span>{" "}
                      <i onClick={copyToClipboard}>show run interface</i>
                    </code>
                    <code onClick={copyToClipboard}>
                      <span>ping vrf pymes-internet {ipWan}</span>
                    </code>
                    <code onClick={copyToClipboard}>
                      ping vrf pymes-internet {ipWan} co 1500
                    </code>
                    <code onClick={copyToClipboard}>
                      show arp vrf pymes-internet {ipWan}
                    </code>
                    <code onClick={copyToClipboard}>
                      telnet vrf pymes-internet {ipWan}
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
                    <code>
                      <span>Puerto Logico</span>{" "}
                      <i onClick={copyToClipboard}>show run interface</i>
                    </code>
                    <code onClick={copyToClipboard}>
                      <span>ping vrf ims-sbc-ippbx {ipWan}</span>
                    </code>
                    <code onClick={copyToClipboard}>
                      show arp vrf ims-sbc-ippbx {ipWan}
                    </code>
                    <code onClick={copyToClipboard}>
                      telnet {ipWan} /vrf ims-sbc-ippbx
                    </code>
                  </div>

                  <div>
                    <h4>
                      NODO <span>A9K</span>
                    </h4>
                    <code onClick={copyToClipboard}>
                      sh ip rou vrf ims-sbc-ippbx {ipWan}
                    </code>
                    <code>
                      <span>Puerto Logico</span>{" "}
                      <i onClick={copyToClipboard}>show run interface</i>
                    </code>
                    <code onClick={copyToClipboard}>
                      <span>ping vrf ims-sbc-ippbx {ipWan}</span>
                    </code>
                    <code onClick={copyToClipboard}>
                      show arp vrf ims-sbc-ippbx {ipWan}
                    </code>
                    <code onClick={copyToClipboard}>
                      telnet vrf ims-sbc-ippbx {ipWan}
                    </code>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default UmZte;

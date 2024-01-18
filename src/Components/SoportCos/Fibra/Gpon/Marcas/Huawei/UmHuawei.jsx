import React, { useRef, useState } from "react";

import { BsFillTelephoneFill, BsLaptop } from "react-icons/bs";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function UmHuawei() {
  const [ipValida, SetIpvalida] = useState("");
  const [ipWan, SetIpWan] = useState("");

  const [telefonia, setTelefonia] = useState(false);
  const [internet, setInternet] = useState(false);

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
   
      <h3>
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
                      <span>ping vrf pymes-internet {ipWan} </span>
                    </code>
                    <code onClick={copyToClipboard}>
                      ping vrf pymes-internet {ipWan} re 1500
                    </code>
                    <code onClick={copyToClipboard}>
                      show arp vrf pymes-internet {ipWan}
                    </code>
                    <code>
                      <i onClick={copyToClipboard}>
                        telnet {ipWan} /vrf pymes-internet
                      </i>
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
                    <code>
                      <i onClick={copyToClipboard}>
                        telnet vrf pymes-internet {ipWan}
                      </i>
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
                    <code>
                      <i onClick={copyToClipboard}>
                        telnet {ipWan} /vrf ims-sbc-ippbx
                      </i>
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
                    <code>
                      <i onClick={copyToClipboard}>
                        telnet vrf ims-sbc-ippbx {ipWan}
                      </i>
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

export default UmHuawei;

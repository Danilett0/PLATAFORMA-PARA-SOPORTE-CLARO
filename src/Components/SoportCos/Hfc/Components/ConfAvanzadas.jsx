import React from 'react'

function ConfAvanzadas(props) {
  return (
    <div className="maincontainers">
          <div className="container">
            <div className="boxContainer">
              <div>
                <span>DMZ</span> <b>Solicitar al cliente: IP VALIDA</b>
              </div>
              <div>
                <span>FORWARDING</span> <b>Solicitar al cliente: PUERTO + PROTOCOLO</b>
              </div>
              <div>
                <span>PORT FORWARDING</span>
                <b>Solicitar al cliente: PUERTO + PROTOCOLO + IP PRIVADA</b>
              </div>
              <div>
                <span>PASSTHROUGH</span> <b>Solicitar al cliente: MAC</b>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ConfAvanzadas

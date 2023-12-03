import React from 'react'

function IpFija(props) {
  return (
    <div className="maincontainers">
    <div className="container">
      <div className="boxContainer">
        <div>
          <span>IP FIJA</span> <b>IP ASIGNADA (192.197.143.20)</b>
        </div>
        <div>
          <span>MASCARA</span> <b>255.255.255.0</b>
        </div>
        <div>
          <span>PUERTA enlace</span>
          <b> IP TERMINADA EN 1 (192.197.143.1)</b>
        </div>
        <div>
          <span>DNS1</span> <b>190.157.8.33</b>
        </div>
        <div>
          <span>DNS2</span> <b>190.157.8.1</b>
        </div>
      </div>
    </div>
  </div>
  )
}

export default IpFija

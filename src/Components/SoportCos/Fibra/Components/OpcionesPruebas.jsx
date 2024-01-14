import React, { useState } from "react";
import UmZte from "../Gpon/Marcas/ZTE/UmZte";
import RedAccesoZ from "../Gpon/Marcas/ZTE/RedAcceso";
import UmHuawei from "../Gpon/Marcas/Huawei/UmHuawei";
import RedAccesoH from "../Gpon/Marcas/Huawei/RedAcceso";

function OpcionesPruebas({ brand }) {
  const [validacion, setValidacion] = useState({
    valExtern: false,
    valIntern: false,
  });

  return (
    <div className="equipmentBrandselected">
      <div className="buttons">
        <button
          className={`Button Blue ${validacion.valExtern ? "selected" : ""}`}
          onClick={() => {
            setValidacion({ valExtern: true });
          }}
        >
          Red de Acceso
        </button>
        <button
          className={`Button Blue ${validacion.valIntern ? "selected" : ""}`}
          onClick={() => {
            setValidacion({ valIntern: true });
          }}
        >
          Ultima Milla
        </button>
      </div>

      {brand === "zte" && (
        <>
          {validacion.valExtern && <RedAccesoZ />}
          {validacion.valIntern && <UmZte />}
        </>
      )}

      {brand === "huawei" && (
        <>
          {validacion.valExtern && <RedAccesoH />}
          {validacion.valIntern && <UmHuawei />}
        </>
      )}
    </div>
  );
}

export default OpcionesPruebas;

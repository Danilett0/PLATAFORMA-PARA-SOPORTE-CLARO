import { useState } from "react";
import Zte from "./Marcas/Zte";
import Huawei from "./Marcas/Huawei";

function Gpon(props) {
  const [huawei, setHuawei] = useState(false);
  const [zte, setZte] = useState(false);

  return (
    <div className="MainGpon">
      <div className="Marcas">
        <button
          onClick={() => {
            setHuawei(true);
            setZte(false);
          }}
          className="Button Black"
        >
          HUAWEI
        </button>
        <button
          onClick={() => {
            setZte(true);
            setHuawei(false);
          }}
          className="Button Black"
        >
          ZTE
        </button>
      </div>

      <div>
        {zte && <Zte />}
        {huawei && <Huawei />}
      </div>
    </div>
  );
}

export default Gpon;

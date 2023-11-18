import React, { useState } from "react";
import LinksNavegacion from "./LinksNavegacion";
import { Link } from "react-router-dom";
import "../styles/components/MenuHamburguer.css";

function MenuHamburguer() {
  const [menu, setMenu] = useState("close");

  const animarMenu = () => {
    menu === "close" ? setMenu("open") : setMenu("close");
  };

  const cerrarMenu = () => {
    setMenu("close");
  };

  return (
    <div className="MenuHamburguer">
      <div className={`hamburguer ${menu === "open" ? "open" : "close"}`} onClick={animarMenu} >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {menu === "open" && (
        <div className="box-menu">
          <div className="Logo">
            <Link to="/" onClick={cerrarMenu}>
              <img src="/images/logo-daniletto.webp" alt="logo Daniletto" />
            </Link>
          </div>

          <LinksNavegacion cerrarMenu={cerrarMenu} />
        </div>
      )}
    </div>
  );
}

export default MenuHamburguer;

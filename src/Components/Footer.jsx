import React from "react";
import LinksNavegacion from "./LinksNavegacion";
import "../App.css";
import "../styles/components/Footer.css";

function Footer(props) {
  return (
    <div className="Footer">
      <div className="Links">
        <LinksNavegacion />
      </div>
    </div>
  );
}

export default Footer;

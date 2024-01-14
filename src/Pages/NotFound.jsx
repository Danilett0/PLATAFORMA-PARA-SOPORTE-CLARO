import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/pages/NotFound.css";

function NotFound() {
  return (
    <div className="NotFound">
      <img
        loading="lazy"
        src="/images/Not-Found.webp"
        alt="imagen pagina no encontrada"
      />
      <Link to="/"> VAMOS A INICIO </Link>
    </div>
  );
}

export default NotFound;

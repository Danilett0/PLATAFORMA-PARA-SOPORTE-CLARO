import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/LinksNavegacion.css";

function LinksNavegacion(props) {

  const cerrarMenu = () => {
    if (props.cerrarMenu) {
      props.cerrarMenu();
    }
  };

  return (
    <nav aria-label="links de navegación">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active" onClick={cerrarMenu}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portafolio"
            activeclassname="active"
            onClick={cerrarMenu}
          >
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeclassname="active" onClick={cerrarMenu}>
            ¿Quien soy?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Blog"
            activeclassname="active"
            onClick={cerrarMenu}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className="LinkContacto"
            to="/Contacto"
            activeclassname="active"
            onClick={cerrarMenu}
          >
            CONTÁCTAME
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LinksNavegacion;

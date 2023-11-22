import React from "react";
import logo from "../../assets/LOGO NOMINA CENTER (.com).png";
export default function NavBar() {
  return (
    <div id="navbar">
      <div className="logo">
        <img id="applogo" src={logo} />
        <h1>
          Nomina<span>Center</span>
        </h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#beneficios">Beneficios</a>
          </li>
          <li>
            <a href="#precios">Precios</a>
          </li>
          <li>
            <a href="#testimonios">Testimonios</a>
          </li>
          <li>
            <button>
              <a href="">Acceso clientes</a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

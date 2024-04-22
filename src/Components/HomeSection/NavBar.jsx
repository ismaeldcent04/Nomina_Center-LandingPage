import React, { useState } from "react";
import logo from "../../assets/LOGO NOMINA CENTER (.com).png";

import { useNavigate } from "react-router-dom";
import LoginModal from "../UI/LoginModal";
import RegisterModal from "../UI/RegisterModal";
export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  // const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleOpenLoginModal= ()=>{
     window.location.href = "http://localhost:2030/Login.aspx";
    // setShowLoginModal(true);
    // setShowRegisterModal(false);
  }
  const handleCloseLoginModal= ()=>{
    setShowLoginModal(false);
  }

  const handleOpenRegisterModal=()=>{
    setShowRegisterModal(true);
    setShowLoginModal(false);
  }

  const handleCloseRegisterModal =()=>{
    setShowRegisterModal(false);
  }
//  const handleOpenLogin=()=> navigate("/login")

  const handleMenu = () => {
    setOpenMenu((prevValue) => !prevValue);
  };
  return (
    <div id="navbar">
      <div className="logo">
        <img id="applogo" src={logo} />
        <h1>
          Nomina<span>Center</span>
        </h1>
      </div>
      <nav className="nav">
        <div className="menu" onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={openMenu ? "open" : ""}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#description">Beneficios</a>
          </li>
          <li>
            <a href="#pricing">Precios</a>
          </li>
          <li>
            <a href="#testimonials">Testimonios</a>
          </li>
          <li>
            <a onClick={handleOpenRegisterModal} className="button"  target="_blank">
              Acceso clientes
            </a>
          </li>
        </ul>
      </nav>
       {/* <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} handleOpenRegister={handleOpenRegisterModal} />  */}
       <RegisterModal show={showRegisterModal} handleClose={handleCloseRegisterModal} handleOpenLogin={handleOpenLoginModal}/>
    </div>
  );
}

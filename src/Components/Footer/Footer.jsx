import React from "react";
import nominaLogo from "../../assets/LOGO NOMINA CENTER (.com).png";
export const Footer = () => {
  return (
    <footer id="footer">
      <div className="sections-container">
        <div>
          <h4>Home</h4>
          <p>Beneficios</p>
          <p>Testimonios</p>
          <p>Logros</p>
          <p>Privacidad</p>
          <p>Empresa</p>
        </div>
        <div>
          <h4>Soporte</h4>
          <p>Email</p>
          <p>Legal</p>
          <p>Terminos de servicio</p>
          <p>Politica de privacidad</p>
        </div>
        <div>
          <h4>Siguenos</h4>
          <p>Instagram</p>
          <p>Linkedin</p>
        </div>
        <div>
          <h4>NominaCenter Free</h4>
          <h4>NominaCenter Premium</h4>
        </div>
      </div>
      <div className="copyright-section">
        <div className="logo-copyright">
          <img className="nominalogo" src={nominaLogo} />
          <p>copyright@NominaCenter 2023</p>
        </div>
        <p>Made by SGS Team</p>
      </div>
    </footer>
  );
};

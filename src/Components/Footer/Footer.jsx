import React from "react";
import nominaLogo from "../../assets/LOGO NOMINA CENTER (.com).png";
export const Footer = () => {
  return (
    <footer id="footer">
      <div className="sections-container">
        <div>
          <h4><a href="#home" style={{"color":"black"}}>Home</a></h4>
          <p><a href="#beneficios">Beneficios</a></p>
          <p><a href="#testimonials">Clientes</a></p>
          <p><a href="#description">Logros</a></p>
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
          {/* <p>
            <a href="https://www.instagram.com/nominacenter" target="_blank">
              Instagram
            </a>
          </p> */}
          <p>
            <a
              href="https://www.linkedin.com/company/99223815/admin/feed/posts/"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
        </div>
        <div>
          <h4>NominaCenter Free</h4>
          <h4>NominaCenter Premium</h4>
        </div>
      </div>
      <div className="copyright-section">
        <div className="logo-copyright">
          <img className="nominalogo" src={nominaLogo} />
          <p>copyright@NominaCenter 2024</p>
        </div>
        <p>Made by SGS Team</p>
      </div>
    </footer>
  );
};

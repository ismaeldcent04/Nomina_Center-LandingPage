import React from "react";
import integralImg from "../../assets/Integral.png";
import rentableImg from "../../assets/Rentable.png";
import eficienteImg from "../../assets/Eficiente.png";
import seguroImg from "../../assets/Seguro.png";
import vanguardImg from "../../assets/Update Done.png"

export const HomeDescription = () => {
  return (
    <div id="beneficios" className="home_description-container">
      <div className="feature integral">
        <div className="title">
          <img src={integralImg} />
          <h3>Integral</h3>
        </div>
        <p>
        Gestiona todas las areas desde tus pagos, acciones del personal, cambios de salario, y mucho mas en un solo lugar
        </p>
      </div>
      <div className="feature rentable">
        <div className="title">
          <img src={rentableImg} />
          <h3>Rentable</h3>
        </div>
        <p>
        Contamos con diferentes planes, los cuales se acomodan a tus necesidades y presupuesto de tu empresa.
        </p>
      </div>
      <div className="feature eficiente">
        <div className="title">
          <img src={eficienteImg} />
          <h3>Eficiente</h3>
        </div>
        <p>
        Nuestros usuarios reportan un aumento en eficiencia de hasta un 20%. Ahorrando tiempo en actividades como la presentacion de documentos oficiales.
        </p>
      </div>
      <div className="feature seguro">
        <div className="title">
          <img src={seguroImg} />
          <h3>Seguro</h3>
        </div>
        <p>
        Contamos con un alto standard de seguridad utilizando documentos encriptados para las transsacciones interbancarias.
        </p>
      </div>

      
      <div className="feature vanguardista vanguardista-container">
        <div className="title">
          <img src={vanguardImg} />
          <h3>Vanguardista</h3>
        </div>
        <p>
        Nos mantenemos actualizando y realizando mejoras a nuestra plataforma para garantizar que nuestros usuarios se mantengan al dia con las normas y ultimas tecnologias.
        </p>
      </div>
      
    </div>
  );
};

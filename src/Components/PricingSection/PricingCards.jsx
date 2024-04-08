import React from "react";
import checkImg from "../../assets/Checkmark.png";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export const PricingCards = () => {
  return (
    <div className="pricing_cards-container">
      <div className="pricing_card left">
        <div>
          <p>10 Empleados</p>
          <h4>Micro</h4>
          <h4>
            <span>Gratis</span>
          </h4>
        </div>
        <ul>
          <li>
            <CancelOutlinedIcon style={{color:"red", width:"25px"}}/>
            Access on all devices
          </li>
          <li>
            {" "}
            <CancelOutlinedIcon style={{color:"red", width:"25px"}}/>
            Access on all devices
          </li>
          <li>
            {" "}
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
        </ul>
        <button className="button">FREE TRIAL</button>
      </div>
      <div className="pricing_card middle">
        <div>
          <p>+ 20 Empleados</p>
          <h4>Mediana</h4>
          <h4>
            <span>$25/Mensual</span>
          </h4>
        </div>
        <ul>
          <li>
          <CancelOutlinedIcon style={{color:"red", width:"25px"}}/>
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
        </ul>
        <button className="button">FREE TRIAL</button>
      </div>
      <div className="pricing_card right">
        <div>
          <p>+50 Empleados</p>
          <h4>Macro</h4>
          <h4>
            <span>$45/Mensuales</span>
          </h4>
        </div>
        <ul>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
        </ul>
        <button className="button">FREE TRIAL</button>
      </div>
    </div>
  );
};

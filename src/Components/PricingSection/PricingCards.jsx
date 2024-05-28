
import checkImg from "../../assets/Checkmark.png";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import freeImg from '../../assets/gratis.png'
import basicImg from '../../assets/perfil.png'
import microImg from '../../assets/employees.png'
import macroImg from '../../assets/new-employee.png'
import enterpriseImg from '../../assets/enterprise.png'


export const PricingCards = ({showRegisterModal}) => {
 
  const handleSetPlan = (newplan)=>{
    showRegisterModal(newplan)
  }

  return (
    <div className="pricing_cards-container">
      <div className="pricing_card left">
        <div>
          <p>5 Empleados</p>
          
          <h4>Plan Gratis</h4>
          <img src={freeImg} className="plan-logo"/>
          <h4>
            <span>Gratis</span>
          </h4>
          
        </div>
        <ul>
          <li>
            {/* <CancelOutlinedIcon style={{color:"red", width:"25px"}}/> */}
            <img src={checkImg} />
            2 Usuarios
          </li>
          <li>
            <img src={checkImg} />
            1 tipo de pago
            {/* <CancelOutlinedIcon style={{color:"red", width:"25px"}}/> */}
          </li>
          <li>
            <img src={checkImg} />
            1 Nomina
          </li>
          <li>
            <CancelOutlinedIcon style={{color:"red", width:"25px"}}/>
            Auditoria
          </li>
        </ul>
        <button className="button" onClick={()=> handleSetPlan("Plan Gratis")}>Solicitar</button>
      </div>
      
      <div className="pricing_card left">
        <div>
          <p>10 Empleados</p>
          
          <h4>Plan Básico</h4>
          <img src={basicImg} className="plan-logo"/>
          <h4>
            <span>USD$60</span>
          </h4>
          
        </div>
        <ul>
          <li>
            {/* <CancelOutlinedIcon style={{color:"red", width:"25px"}}/> */}
            <img src={checkImg} />
            2 Usuarios
          </li>
          <li>
            <img src={checkImg} />
            1 tipo de pago
            {/* <CancelOutlinedIcon style={{color:"red", width:"25px"}}/> */}
          </li>
          <li>
            <img src={checkImg} />
            1 Nomina
          </li>
          <li>
            <CancelOutlinedIcon style={{color:"red", width:"25px"}}/>
            Auditoria
          </li>
        </ul>
        <button className="button" onClick={()=> handleSetPlan("Plan Básico")}>Solicitar</button>
      </div>
      <div className="pricing_card middle">
        <div>
          <p>20 Empleados</p>
          <h4>Mediana</h4>
          <img className="plan-logo" src={microImg}/>
          <h4>
            <span>USD$80</span>
          </h4>
        </div>
        <ul>
          <li>
           <img src={checkImg} />
            Múltiples Pagos
          </li>
          <li>
            <img src={checkImg} />
            2 Nominas
          </li>
          <li>
            <img src={checkImg} />
            4 Usuarios
          </li>
          <li>
            <CancelOutlinedIcon style={{color:"red", width:"25px"}}/>
            Auditoria
          </li>
        </ul>
        <button className="button" onClick={()=> handleSetPlan("Plan Mediana")}>Solicitar</button>
      </div>
      <div className="pricing_card right">
        <div>
          <p>50 Empleados</p>
          <h4>Macro</h4>
          <img className="plan-logo" src={macroImg}/>
          <h4>
            <span>USD$90</span>
          </h4>
        </div>
        <ul>
          <li>
            <img src={checkImg} />
            Múltiples Pagos
          </li>
          <li>
            <img src={checkImg} />
            Múltiples Nominas
          </li>
          <li>
            <img src={checkImg} />
            5 Usuarios
          </li>
          <li>
            <img src={checkImg} />
            Auditoria
          </li>
        </ul>
        <button className="button" onClick={()=> handleSetPlan("Plan Macro")} >Solicitar</button>
      </div>
      <div className="pricing_card left">
        <div>
          <p>+50 Empleados</p>
          
          <h4>Enterprise</h4>
          <img src={enterpriseImg} className="plan-logo"/>
          <h4>
            <span>Personalizado</span>
          </h4>
          
        </div>
        <ul>
          <li>
            <img src={checkImg} />
            Múltiples Pagos
          </li>
          <li>
            <img src={checkImg} />
            Múltiples Nominas
          </li>
          <li>
            <img src={checkImg} />
            5 Usuarios
          </li>
          <li>
            <img src={checkImg} />
            Auditoria
          </li>
        </ul>
        <button className="button" onClick={()=> handleSetPlan("Plan Enterprise")}>Contáctanos</button>
      </div>
    </div>
  );
};

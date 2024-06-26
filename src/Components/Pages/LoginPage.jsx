import { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { authenticateUser, getEmpresaByRnc, getEmpresas, getUserByEmail, updateUsuario } from "../../Services";
import "./LoginPage.css";
import logoimg from "../../assets/LOGO NOMINA CENTER (.com).png"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { CircularProgress, Skeleton } from "@mui/material";
import { AppIframePage } from "./AppIframePage";
import { AppContext } from "../Context/AppContext";
export const LoginPage = ()=>{
    const {setNCUrl} = useContext(AppContext);
    // const navigate = useNavigate();
    const rncRef = useRef();
    const iframeRef = useRef();
    const [rnc, setRnc] = useState();
    const [razonS, setRazonS] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [empresa, setEmpresa] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const [passwordIsVisible, setPassworIsVisible] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsloading] = useState(undefined);
    const [url, setUrl]=useState("");
    const handleRNC = async(e)=>{
        const empresa = await getEmpresaByRnc(e.target.value || null);
        if(empresa == null){
            setErrorMessage("La empresa vinculada a este RNC no esta definida, favor ingresar un RNC valido.")
        } else if(empresa.estado != 0){
            setErrorMessage("La empresa vinculada a este RNC no esta desactivada, favor ingresar un RNC valido.")
        }else{
            setRazonS(empresa.razonSocial);
            setEmpresa(empresa)
            setErrorMessage(null);
        }
        
    }
    const handleEmail = (e)=>{
      setEmail(e.target.value)
    }
    // console.log(empresa);
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleLogin = async(e)=>{
        e.preventDefault();
        // const checkedUserEmail = await getUserByEmail(email);
        const credentials = {
            username:email, 
            taxID:rncRef.current.value, 
            password:password
        }
        const response = await authenticateUser(credentials);
        console.log(response);
        setIsloading(true);
        if(response?.url){
            setIsAuthenticated(true);
            setUrl(response.url)
            setNCUrl(response.url);
            window.location.href = response.url;
        }
        else{
            setLoginError("Email o contraseña incorrecta, por favor intente de nuevo con credenciales validas.");
            setIsAuthenticated(false)
            setIsloading(false);
        }
    }

    const handlePasswordVisibility=()=>{
        setPassworIsVisible(prevValue=> !prevValue)
    }

    return (
        <div id="login">
            <div className="login_form">
              <div className="login_header">
                <img src={logoimg} className="logo_img"/>    
                <h1>Login</h1>
              </div>
             <form onSubmit={handleLogin}>
                <div >
                 <label><input disabled={isLoading} type="text" className="rnc_input" placeholder="RNC/Cedula" onChange={handleRNC} ref={rncRef}/><PersonOutlineOutlinedIcon className="icon"/></label>
                </div>
                {errorMessage && <span>{errorMessage}</span>}
                <div>
                 <label><input type="text" disabled placeholder="Razón Social" className="rsocial_input" onChange={handleRNC} value={razonS} /><PeopleOutlineOutlinedIcon className="icon"/></label>
                </div>
                <div>
                 <label><input  disabled={isLoading} type="email" placeholder="Email" onChange={handleEmail} value={email} /><EmailOutlinedIcon className="icon"/></label>
                </div>
                <div>
                <label> <input  disabled={isLoading} type={passwordIsVisible?"text":"password"} placeholder="Password" onChange={handlePassword} value={password}/>{!passwordIsVisible?<VisibilityOffOutlinedIcon onClick={handlePasswordVisibility} className="icon password_icon"/>: <VisibilityOutlinedIcon onClick={handlePasswordVisibility} className="icon password_icon"/>}</label>
                </div>
                <Link to={"/register"}><p className="redirect_register">Sin usuario? Registrate!</p></Link>
                <div className="submit_container">
                <label><button  disabled={isLoading} type="submit">{isLoading?<CircularProgress className="spinner"/>:"Iniciar Sesión"}</button></label> 
                {loginError && <span>{loginError}</span>}   
                </div>
            
             </form>
            </div>
        </div>
    )
}
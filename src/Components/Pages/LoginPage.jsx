import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { getEmpresaByRnc, getEmpresas, getUserByEmail, updateUsuario } from "../../Services";
import "./LoginPage.css";
import logoimg from "../../assets/LOGO NOMINA CENTER (.com).png"
export const LoginPage = ()=>{

    const rncRef = useRef();
    const [razonS, setRazonS] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [empresa, setEmpresa] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const handleRNC = async(e)=>{
        const empresa = await getEmpresaByRnc(rncRef.current.value);
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
    console.log(empresa);
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleLogin = async(e)=>{
        e.preventDefault();
        const checkedUserEmail = await getUserByEmail(email);
        if(checkedUserEmail && checkedUserEmail.empresa == empresa.oid && password == checkedUserEmail.password){
            if(!errorMessage){
                const updatedUser = await updateUsuario(checkedUserEmail.oid);
                console.log(updatedUser);
                window.location.href = `http://localhost:4412/AutoLogin.aspx?UserName=Admin&Password=&DataBase=NC${empresa.rnc}`;
            }
           
        }else{
            setLoginError("Email o contraseña incorrecta, por favor intente de nuevo con credenciales validas.")
        }
    }
    return(
        <div id="login">
            <div className="login_form">
              <div className="login_header">
                <img src={logoimg} className="logo_img"/>    
                <h1>Login</h1>
              </div>
             <form onSubmit={handleLogin}>
                <div>
                 <label><input type="text" placeholder="RNC/Cedula" onChange={handleRNC} ref={rncRef}/></label>
                 {errorMessage && <span>{errorMessage}</span>}
                </div>
                <div>
                 <label><input type="text" disabled placeholder="Razón Social" onChange={handleRNC} value={razonS} /></label>
                </div>
                <div>
                 <label><input type="email" placeholder="Email" onChange={handleEmail} value={email} /></label>
                </div>
                <div>
                <label> <input type="password" placeholder="Password" onChange={handlePassword} value={password}/></label>
                </div>
                <Link to={"/register"}>Sin usuario? Registrate!</Link>
                <div>
                <label><input type="submit" value={"Iniciar Sesión"}/></label> 
                {loginError && <span>{loginError}</span>}   
                </div>
                
             </form>
            </div>
        </div>
    )
}
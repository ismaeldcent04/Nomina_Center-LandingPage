import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTaxByRnc } from "../../Services";
// import connection from "../../Services";
// import { Request } from "tedious";

export const RegisterPage = ()=>{
    // const [newUser,setNewUser] = useState({
    //     rnc:"",
    //     razonS:"",
    //     direccion:"",
    //     telefono:"",
    //     login:"Admin",
    //     password:"",
    //     cpassword:"",
    // });
    const [rnc, setRnc] = useState();
    const [razonS, setRazonS] = useState();
    const [email, setEmail] = useState();
    const [direccion, setDireccion] = useState();
    const [telefono, setTelefono] = useState();
    const [login, setLogin]=useState("Admin");
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();
    const [taxId, setTaxId ] = useState();
    useEffect(()=>{
     (async()=>{
      const tax = await getTaxByRnc(rnc);
      setTaxId(tax);
     })()

    },[rnc])
    console.log()
    const handleRnc=(e)=>{
      setRnc(e.target.value);
    }
    const handledireccion= (e)=>{
      setDireccion(e.target.value)
    }
    const handletelefono= (e)=>{
      setTelefono(e.target.value)
    }
   const handlepassword = (e)=>{
    setPassword(e.target.value)
   }

   const handleCpassword = (e)=>{
    setCPassword(e.target.value);
   }
    const handleNewUser= ()=>{
      
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <div id="register">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                  <label>RNC/Cedula<input name="rnc" type="text" placeholder="Ingresa tu RNC" value={rnc} onChange={handleRnc}/></label>
                </div>
                <div>
                  <label>Razón Social <input name="razonS" type="texto" placeholder="Ingresa una Razon Social" value={taxId?.titular} disabled onChange={handleNewUser} /></label>
                </div>
                <div>
                  <label>Email <input name="email" type="email" placeholder="example@mail.com" value={email} onChange={handleNewUser} /></label>
                </div>
                <div>
                  <label>Dirección <input name="direccion" type="texto" placeholder="Ingresa una dirección" value={direccion} onChange={handledireccion}/></label>
                </div>
                <div>
                  <label>Teléfono <input name="telefono" type="texto" placeholder="Ingresa un teléfono" value={telefono} onChange={handletelefono}/></label>
                </div>
          
                <div>
                 <label>Password<input name="password" type="password" placeholder="Ingrese una contraseña" value={password} onChange={handlepassword} /></label>
                </div>
                <div>
                  <label>Confirmar Password<input name="cpassword" type="password" placeholder="Ingrese su contraseña" value={cpassword} onChange={handleCpassword}/></label>
                </div>
                <div>
                <Link to={"/login"}>Registrado? Inicia sesión</Link>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
}
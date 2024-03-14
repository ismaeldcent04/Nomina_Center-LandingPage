import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { addEmpresas, addUser, getEmpresas, getTaxByRnc, getUsers, updateUsuario } from "../../Services";
import "./RegisterPage.css";
import logoimg from "../../assets/LOGO NOMINA CENTER (.com).png"
import generatePassword from "../../helpers/generatePassword";
import { sendEmail } from "../../helpers/sendEmail";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
// import connection from "../../Services";
// import { Request } from "tedious";

export const RegisterPage = () => {

  const rncRef = useRef();
  const razonSRef = useRef();
  const direccionRef = useRef();
  const telefonoRef = useRef();
  const [rnc, setRnc] = useState();
  const [razonS, setRazonS] = useState();
  const [email, setEmail] = useState();
  const [nombre, setNombre] = useState();
  const [direccion, setDireccion] = useState();
  const [telefono, setTelefono] = useState();
  // const [password, setPassword] = useState("");
  // const [cpassword, setCPassword] = useState("");
  const [taxId, setTaxId] = useState();
  const [rncIsValid, setRncIsValid] = useState(true);
  const [emailValidationMessage, setEmailValidationMessage] = useState(null);
  // const [passwordIsValid, setPasswordIsValid] = useState(true);
  // const [cPasswordIsValid, setCPasswordIsValid] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const tax = await getTaxByRnc(rncRef.current.value);
  //     setTaxId(tax);
  //   })();
  // }, [rnc]);

  const handleRnc = async(e) => {
    // const tax = await getTaxByRnc(rncRef.current.value);
    setRnc(e.target.value);
   
    const tax = await getTaxByRnc(e.target.value || null );
    const empresas = await getEmpresas();
    console.log("si entro");

    razonSRef.current.value = tax?.titular || null;

    direccionRef.current.value =
      tax?.dir1 == undefined || tax?.dir1 == "" ? "" : tax.dir1;

    telefonoRef.current.value =
      tax?.telefono == undefined || tax?.telefono == ""
        ? "" : tax.telefono;

    const empresaRnc = empresas.find(empresa=> empresa.rnc === e.target.value); 

    if (!tax || empresaRnc) {
      setRncIsValid(false);
     
    } else if(e.target.value.length <= 0 ){
      setRncIsValid(false);
    }
    else{
      setRncIsValid(true);
    }
 
    
  };

  const handleEmail = async(e)=>{
    setEmail(e.target.value);
    const users = await getUsers();
    const checkedUser = users.find(user=> user.email == e.target.value);
    console.log(users);
    console.log(checkedUser);
    if(!checkedUser && e.target.value.length > 0){
      setEmailValidationMessage(null);
      console.log("si entro");
    }
    else if(e.target.value.length <= 0){
      setEmailValidationMessage("Email no valido.")
    }
    else{
      setEmailValidationMessage("Email ya asignado a un usuario, por favor intente con otro email.");
    }
    
  }

  const handleNombre = async(e)=>{
    setNombre(e.target.value);
  }
  const handledireccion = (e) => {
    setDireccion(e.target.value);
  };
  const handletelefono = (e) => {
    setTelefono(e.target.value);
  };
  // const handlepassword = (e) => {
  //   if(e.target.value.length < 6){
  //     setPasswordIsValid(false);
  //   } else{
  //     setPasswordIsValid(true);
  //   }
  //   setPassword(e.target.value);
  // };

  // const handleCpassword = (e) => {
  //   if(password != e.target.value){
  //     setCPasswordIsValid(false);
  //   }
  //   else{
  //     setCPasswordIsValid(true);
  //   }
  //   setCPassword(e.target.value);
  // };
  const handleNewUser = () => {};

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Click");
    
    const password = generatePassword(10);
    // const emailSettings = {
    //   service_id: 'service_02i1sr1',
    //   template_id: 'template_srygbto',
     
    //   template_params: {
    //       email: email,
    //       to_name:nombre,
    //       message: `Tu password temporal para ingresar a NominaCenter es: ${password}`,
    //       reply_to:'idicent@sergioguzmansoft'
    //   },
    //   public_key: 'sQhZDnAo-9X3JUjqg',
    // }
    
    const empresa = {
      rnc: rncRef.current.value,
      razonSocial: razonSRef.current.value,
      direccion: direccion,
      email: email,
      password: password,
      fechaCreacion: new Date(),
      estado: 0,
      confirmado: true,
    }
    const user = {
      email: email,
      telefono: telefonoRef.current.value,
      password: password,
      nombre: nombre,
      admin:true,
      ultimoLogin:null
    }

    if(rncIsValid && !emailValidationMessage){
      try {
        const isNew = true;
        const newEmpresa = await addEmpresas(empresa);
        console.log(newEmpresa);
        const newUser = await addUser({...user, empresa:newEmpresa.oid}).then(async(data)=>{
          // await updateUsuario(data.oid);
          rncRef.current.value ="";
          razonSRef.current.value = "";
          setEmail("");
          setNombre("");
          setDireccion("");
          setTelefono("");
        });

       
        // sendEmail(nombre, password, email);
        // window.location.href = `http://localhost:4412/AutoLogin.aspx?UserName=${email}&Password=${password}&IsNewBusiness=${isNew}&DataBase=NC${empresa.rnc}`;
      
      } catch (error) {
        console.log(error);
      }
    } else return;
    

  
  };

  return (
    <div id="register">
      <div className="register_form">
      <div className="register_header">
        <img src={logoimg}  className="logo_img"/>
      <h1>Registro</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              name="rnc"
              type="text"
              placeholder="RNC/Cédula"
              ref={rncRef}
              value={rnc || ""}
              onChange={handleRnc}
              className="rnc_input"
              required
            />
            <PersonOutlineOutlinedIcon className="icon"/>
          </label>
        </div>
        {!rncIsValid && (
              <span>RNC no existente o ya asignado, por favor ingresa un RNC valido.</span>
            )}
        <div>
          <label>
            <input
              name="razonS"
              type="text"
              placeholder="Razón Social"
              ref={razonSRef}
              disabled
              onChange={handleNewUser}
              className="rsocial_input"
            />
            <PeopleOutlineOutlinedIcon className="icon"/>
          </label>
        </div>
        <div>
          <label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              className="email_input"
              required
            />
            <EmailOutlinedIcon className="icon"/>
          </label>
          {emailValidationMessage && <span>{emailValidationMessage}</span>}
        </div>
        <div>
          <label>
            <input
              name="nombre"
              type="text"
              placeholder="Nombre"
              value={nombre}
              className="input_nombre"
              onChange={handleNombre}
            />
            <BadgeOutlinedIcon className="icon"/>
          </label>
        </div>
        <div>
          <label>
            <input
              name="direccion"
              type="texto"
              placeholder="Dirección"
              value={direccion}
              onChange={handledireccion}
              ref={direccionRef}
            />
            <LocationOnOutlinedIcon className="icon"/>
          </label>
        </div>
        <div>
          <label>
            <input
              name="telefono"
              type="texto"
              placeholder="Teléfono"
              value={telefono}
              onChange={handletelefono}
              ref={telefonoRef}
            />
            <PhoneOutlinedIcon className="icon"/>
          </label>
        </div>

        {/* <div>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Ingrese una contraseña"
              value={password}
              onChange={handlepassword}
              minLength={6}
              required
            />
          </label>
          {!passwordIsValid && <span>La contraseña debe ser de al menos 6 caracteres</span>}
        </div>
        <div>
          <label>
            Confirmar Password
            <input
              name="cpassword"
              type="password"
              placeholder="Ingrese su contraseña"
              value={cpassword}
              onChange={handleCpassword}
              required
              
            />
          </label>
          {!cPasswordIsValid && <span>Confirmar Password debe ser igual a Password.</span>}
            </div>*/}
        <div>
          <Link to={"/login"}><p className="login_redirect">Registrado? Inicia sesión</p></Link>
        </div> 
        <div className="submit_container">
        <input disabled={!(!emailValidationMessage && rncIsValid) }  type="submit" value={"Registrarse"}/>
        </div>
      </form>
      </div>
    </div>
  );
};

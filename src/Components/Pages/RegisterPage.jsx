import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { addEmpresas, addUser, getEmpresas, getTaxByRnc, getUsers } from "../../Services";
import "./RegisterPage.css";
// import connection from "../../Services";
// import { Request } from "tedious";

export const RegisterPage = () => {
  // const [newUser,setNewUser] = useState({
  //     rnc:"",
  //     razonS:"",
  //     direccion:"",
  //     telefono:"",
  //     login:"Admin",
  //     password:"",
  //     cpassword:"",
  // });
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
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [taxId, setTaxId] = useState();
  const [rncIsValid, setRncIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [cPasswordIsValid, setCPasswordIsValid] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const tax = await getTaxByRnc(rncRef.current.value);
  //     setTaxId(tax);
  //   })();
  // }, [rnc]);

  const handleRnc = async(e) => {
    const tax = await getTaxByRnc(rncRef.current.value);
    const empresas = await getEmpresas();
    console.log(tax);
    setTaxId(tax);
    setRnc(e.target.value);

    razonSRef.current.value = tax?.titular;

    direccionRef.current.value =
      tax?.dir1 == undefined || tax?.dir1 == "" ? "" : tax.dir1;

    telefonoRef.current.value =
      tax?.telefono == undefined || tax?.telefono == ""
        ? "" : tax.telefono;

    const empresaRnc = empresas.find(empresa=> empresa.rnc === rncRef.current.value); 

    if (!tax || empresaRnc) {
      setRncIsValid(false);
     
    } else if(rncRef.current.value == null){
      razonSRef.current.value = "";
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
    if(!checkedUser){
      setEmailIsValid(true);
    }
    else{
      setEmailIsValid(false);
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
  const handlepassword = (e) => {
    if(e.target.value.length < 6){
      setPasswordIsValid(false);
    } else{
      setPasswordIsValid(true);
    }
    setPassword(e.target.value);
  };

  const handleCpassword = (e) => {
    if(password != e.target.value){
      setCPasswordIsValid(false);
    }
    else{
      setCPasswordIsValid(true);
    }
    setCPassword(e.target.value);
  };
  const handleNewUser = () => {};

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Click");
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

    if(rncIsValid && emailIsValid && passwordIsValid && cPasswordIsValid){
      try {
        const newEmpresa = await addEmpresas(empresa);
        console.log(newEmpresa);
        const newUser = await addUser({...user, empresa:newEmpresa.oid}).then(()=>{
          rncRef.current.value ="";
          razonSRef.current.value = "";
          setEmail("");
          setNombre("");
          setDireccion("");
          setTelefono("");
          setPassword("");
          setCPassword("");
        });
        console.log(newUser);
      } catch (error) {
        console.log(error);
      }
    } else return;
    

  
  };

  return (
    <div id="register">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            RNC/Cedula
            <input
              name="rnc"
              type="text"
              placeholder="Ingresa tu RNC"
              ref={rncRef}
              onChange={handleRnc}
              required
            />
            {!rncIsValid && (
              <span>RNC no existente o ya asignado, por favor ingresa un RNC valido.</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Razón Social{" "}
            <input
              name="razonS"
              type="texto"
              placeholder="Ingresa una Razon Social"
              ref={razonSRef}
              disabled
              onChange={handleNewUser}
            />
          </label>
        </div>
        <div>
          <label>
            Email{" "}
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={handleEmail}
              required
            />
          </label>
          {!emailIsValid && <span>Email ya asignado a un usuario, por favor intente con otro email.</span>}
        </div>
        <div>
          <label>
            Nombre
            <input
              name="nombre"
              type="text"
              placeholder="Ingrese un nombre"
              value={nombre}
              onChange={handleNombre}
            />
          </label>
        </div>
        <div>
          <label>
            Dirección{" "}
            <input
              name="direccion"
              type="texto"
              placeholder="Ingresa una dirección"
              value={direccion}
              onChange={handledireccion}
              ref={direccionRef}
            />
          </label>
        </div>
        <div>
          <label>
            Teléfono{" "}
            <input
              name="telefono"
              type="texto"
              placeholder="Ingresa un teléfono"
              value={telefono}
              onChange={handletelefono}
              ref={telefonoRef}
            />
          </label>
        </div>

        <div>
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
        </div>
        <div>
          <Link to={"/login"}>Registrado? Inicia sesión</Link>
        </div>
        <input disabled={(password != cpassword) || password?.length == 0|| cpassword?.length == 0} type="submit" value={"Registrarse"}/>
      </form>
    </div>
  );
};

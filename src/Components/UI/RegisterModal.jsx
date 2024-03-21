import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addEmpresas, addUser, getEmpresas, getTaxByRnc, getUsers } from '../../Services';
import generatePassword from '../../helpers/generatePassword';
import { sendEmail } from '../../helpers/sendEmail';
import "../Pages/RegisterPage.css"
import Swal from 'sweetalert2';
import { Spinner } from 'react-bootstrap';



function RegisterModal({handleClose, show, handleOpenLogin}) {
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
  const [taxId, setTaxId] = useState();
  const [rncIsValid, setRncIsValid] = useState(true);
  const [emailValidationMessage, setEmailValidationMessage] = useState(null);
  const [isLoading, setIsLoading]= useState(false);
  const [validationMessage, setValidationMessage]=useState();
  
  const handleRnc = async(e) => {
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
  const handleNombre = (e)=>{
    setNombre(e.target.value);
  }
  const handledireccion = (e) => {
    setDireccion(e.target.value);
  };
  const handletelefono = (e) => {
    setTelefono(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Click");
    setIsLoading(true);
    const password = generatePassword(10);
    
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
        const newEmpresa = await addEmpresas(empresa);

        const newUser = await addUser({...user, empresa:newEmpresa.oid}).then(async(data)=>{
          // await updateUsuario(data.oid);
          rncRef.current.value ="";
          razonSRef.current.value = "";
          setEmail("");
          setNombre("");
          setDireccion("");
          setTelefono("");
        });
        //sendEmail(nombre, password, email);
        Swal.fire("Usuario Agregado!",empresa.rnc,'success')
        handleOpenLogin();
        // window.location.href = `http://localhost:4412/AutoLogin.aspx?UserName=${empresa.email}&Password=${empresa.password}&IsNewBusiness=true&DataBase=NC${empresa.rnc}`;
        
      } catch (error) {

        console.log(error);
      }
    } else {
      Swal.fire("Error al crear usuario","Favor verificar los datos proporcionados", 'error')
      setIsLoading(false);
      return;
     
    };
    

  
  };

  return (
    <>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>RNC/Cédula</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa un RNC/Cédula"
                onChange={handleRnc}
                ref={rncRef}
                value={rnc || ""}
                autoFocus
                disabled={isLoading}
                required

              />
               {!rncIsValid &&( <span className="validation_error">RNC no existente o ya asignado, por favor ingresa un RNC valido.</span>)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Razón Social</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa una razón social"
                ref={razonSRef}
                disabled
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa un email"
                value={email}
                onChange={handleEmail}
               
                required
                autoFocus
              />
               {emailValidationMessage && <span className="validation_error">{emailValidationMessage}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa un nombre"
                value={nombre}
                onChange={handleNombre}
                autoFocus
                
              />

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa una dirección"
                value={direccion}
                onChange={handledireccion}
                ref={direccionRef}
              
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa un teléfono"
                value={telefono}
                onChange={handletelefono}
                ref={telefonoRef}
                
                autoFocus
              />
            </Form.Group>
            <div>
              <a className='redirect-link login' onClick={handleOpenLogin}>Registrado? Inicia sesión</a>
            </div>
            <Button  className="submit-button" type='submit' variant="primary">
            Registrarse
          </Button>
          </Form>
       
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;
import { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { authenticateUser, getEmpresaByRnc } from '../../Services';
import { AppContext } from '../Context/AppContext';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import "../Pages/LoginPage.css"
import { Spinner } from 'react-bootstrap';
import { CircularProgress } from '@mui/material';
import Swal from 'sweetalert2';


function LoginModal({handleClose, show, handleOpenRegister}) {
    const {setNCUrl, setIsAuthenticated} = useContext(AppContext);
    const rncRef = useRef();
    const [razonS, setRazonS] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [empresa, setEmpresa] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const [passwordIsVisible, setPassworIsVisible] = useState(false);
   
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
  
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }

  const handleLogin = async(e)=>{
    console.log("Click");
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
        setUrl(response.url)
        setNCUrl(response.url);
        // Swal.fire("Autenticación exitosa","Iniciando Sesión","success")
        setIsAuthenticated(true);
        // window.location.href = response.url;
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
    <>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>RNC/Cédula</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu RNC"
                autoFocus
                onChange={handleRNC}
                disabled={isLoading}
                ref={rncRef}
              />
              {errorMessage && <span className="validation_error">{errorMessage}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Razón Social</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu razón social"
                autoFocus
                onChange={handleRNC}
                value={razonS}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                autoFocus
                onChange={handleEmail}
                disabled={isLoading}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Password</Form.Label>
              <div className='password_input_container'>
              <Form.Control
                type={passwordIsVisible?"text":"password"}
                placeholder="Ingresa tu contraseña"
                autoFocus
                onChange={handlePassword}
                disabled={isLoading}
                value={password}
              />
              {!passwordIsVisible?<VisibilityOffOutlinedIcon onClick={handlePasswordVisibility} className="icon password_icon"/>: <VisibilityOutlinedIcon onClick={handlePasswordVisibility} className="icon password_icon"/>}
              </div>
            </Form.Group>
            <div>
            <a className='redirect-link register' onClick={handleOpenRegister}>Sin usuarios? Registrate!</a>
            </div>
            <Button disabled={isLoading} className='submit-button' type="submit" variant="primary" >
            Iniciar Sesión
            </Button>
            <div>
            {loginError && <span className="validation_error">{loginError}</span>}   
            </div>
            </Form>
            {isLoading? <CircularProgress/>:""}
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
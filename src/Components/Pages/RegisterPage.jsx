import { useState } from "react"
import { Link } from "react-router-dom"
// import connection from "../../Services";
// import { Request } from "tedious";

export const RegisterPage = ()=>{
    const [newUser,setNewUser] = useState({
        rnc:"",
        razonS:"",
        direccion:"",
        telefono:"",
        login:"Admin",
        password:"",
        cpassword:"",
    });

    const handleNewUser= (e)=>{
        const name = e.target.name;
        const value = e.target.value

        setNewUser(prevValue=>{
            return {...prevValue, [name]:value}
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(newUser);
        
        // const request = new Request('SELECT * FROM Usuario', (err, rowCount)=>{
        //     if (err) {
        //         console.error(err.message);
        //       } else if (rowCount > 0) {
        //         console.log("Se trajeron los registros correctamente")
        //       } else {
        //         console.log('Error al registrar el usuario');
        //       }
        // })
        // connection.execSql(request);
    }

    return(
        <div id="register">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                  <label>RNC/Cedula<input name="rnc" type="text" placeholder="Ingresa tu RNC" value={newUser.rnc} onChange={handleNewUser}/></label>
                </div>
                <div>
                  <label>Razón Social <input name="razonS" type="texto" placeholder="Ingresa una Razon Social" value={newUser.razonS} onChange={handleNewUser}/></label>
                </div>
                <div>
                  <label>Dirección <input name="direccion" type="texto" placeholder="Ingresa una dirección" value={newUser.direccion} onChange={handleNewUser}/></label>
                </div>
                <div>
                  <label>Teléfono <input name="telefono" type="texto" placeholder="Ingresa un teléfono" value={newUser.telefono} onChange={handleNewUser}/></label>
                </div>
                <div>
                  <label>Login<input name="login" type="texto" disabled value={newUser.login} onChange={handleNewUser}/></label>
                </div>
                <div>
                 <label>Password<input name="password" type="password" placeholder="Ingrese una contraseña" value={newUser.password} onChange={handleNewUser} /></label>
                </div>
                <div>
                  <label>Confirmar Password<input name="cpassword" type="password" placeholder="Ingrese su contraseña" value={newUser.cpassword} onChange={handleNewUser}/></label>
                </div>
                <div>
                <Link to={"/login"}>Registrado? Inicia sesión</Link>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
}
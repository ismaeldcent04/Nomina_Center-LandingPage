import { Link } from "react-router-dom"


export const LoginPage = ()=>{
    return(
        <div id="login">
            <h1>Login</h1>
            <form>
                <div>
                 <label>Username<input type="text" placeholder="Ingresa un Username"/></label>
                </div>
                <div>
                <label>Password <input type="password" placeholder="Ingresa una Contraseña"/></label>
                </div>
                <Link to={"/register"}>Sin usuario? Registrate!</Link>
                <div>
                <button>Iniciar Sesión</button>
                </div>
            </form>
        </div>
    )
}
import {Link} from "react-router-dom";
import Header from "../atoms/Header";
import '../../assets/style/Login.css'
function FormLogin (){
    return (  
      <div className="login">
        <div>
            <div>
            <Header/>
            <h2>Bienvenido</h2>
            </div> 
            <div>
                <label>Username</label>
            </div>
                <input type="text"/>
            <div id="top2">
                <label>Password</label>
            </div>
            <input type="password"/>
            <div id="top2">
                <button>Iniciar sesion</button>
            </div>
            <div id="top2">
                <label>¿No tienes cuenta? </label>
                <Link to="/Register">Registrate</Link>
            </div>  
        </div>            
    </div>
    );
}
export default FormLogin;
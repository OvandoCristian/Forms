import {Link} from "react-router-dom";
import Header from "../atoms/Header";
import '../../assets/style/Login.css'
function FormLogin (){
    return (  
      <div className="form">
            <Header/>
            <form>
                <h3>Bienvenido</h3>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="password"/>
                <button>Iniciar sesion</button>
                <div>
                <label>¿No tienes cuenta? </label>
                <Link to="/Register">Registrate</Link>
                </div>
            </form>             
    </div>
    );
}
export default FormLogin;
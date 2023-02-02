import {Link} from "react-router-dom";
import { useRef } from 'react';
import Header from "../atoms/Header";
import '../../assets/style/Login.css'
function FormLogin (){
    const formDataL = useRef("");
    const handlerClickL = (e)=>{
        e.preventDefault();
        const formData = new FormData(formDataL.current);
        let URI='http://34.225.239.102/api/iniciar'
        let options={
        method:'POST',
        headers:{ "Content-Type":'application/json'},
        body:JSON.stringify({
                usuario:formData.get('username'),
                contrasenia:formData.get('password'),
        })
    }
    console.log(options.body)
    fetch(URI,options)
    .then(response => response.json())
    .then(data =>{alert(JSON.stringify(data))})
    }
    
    return (  
      <div className="form">
            <Header/>
            <form ref={formDataL}>
                <h3>Bienvenido</h3>
                <input type="text" name='username' placeholder="Username"/>
                <input type="password" name='password' placeholder="password"/>
                <button onClick={handlerClickL}>Iniciar sesion</button>
                <div>
                <label>¿No tienes cuenta? </label>
                <Link to="/Register">Registrate</Link>
                </div>
                <div>
                <Link to="/Autobus">Dar de alta autobus</Link>
                </div>
            </form>             
    </div>
    );
}
export default FormLogin;
import {Link} from "react-router-dom";
import { useRef } from 'react';
import '../../assets/style/Register.css'
import Header from '../atoms/Header';

function Formregister (){
    const formDataR = useRef("");
    const handlerClickR = (e)=>{
        e.preventDefault();
        const formData = new FormData(formDataR.current);
        let URI='http://34.225.239.102/api/autobus/register'
        let options={
        method:'POST',
        headers:{ "Content-Type":'application/json'},
        body:JSON.stringify({
                name: formData.get('name'),
                email:formData.get('e-mail'),
                username: formData.get('username'),
                password: formData.get('password'),
        })
    }
    console.log(options.body)
    fetch(URI,options)
    .then(response => response.json())
    .then(data =>{alert(JSON.stringify(data))})
    }
    
 return (
    <div className='formR'>  
            <form ref={formDataR}>
            <Header/>
                    <input type="text" name='name' placeholder="Nombre"/>
                    <input type="email" name='e-mail' placeholder="E-mail"/>
                    <input type="text" name='username' placeholder="Username"/>
                    <input type="password" name='password' placeholder="Password"/>
                    <button onClick={handlerClickR}>Registro</button>  
                    <div>
                    <label>Registrar autobus  </label>
                    <Link to="/Autobus">¡Registrar aqui!</Link>
                    </div>
            </form>
    </div>
        
    );
}
export default Formregister;
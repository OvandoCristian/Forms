import {Link} from "react-router-dom";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../../assets/style/Register.css'
import Header from '../atoms/Header';

function Formregister (){
        const formDataR = useRef("");
        const navigate = useNavigate();
    const handlerClickR = (e)=>{
        e.preventDefault();
        const formData = new FormData(formDataR.current);
        let URI='http://34.225.239.102/api/registrar/usuario'
        let options={
        method:'POST',
        headers:{ "Content-Type":'application/json'},
        body:JSON.stringify({
                nombre: formData.get('name'),
                usuario:formData.get('username'),
                correo: formData.get('e-mail'),
                contrasenia: formData.get('password'),
        })
    }
    console.log(options.body)
    fetch(URI,options)
    .then(response => response.json())
    .then(data =>{ 
        alert(JSON.stringify(data))
        navigate('/')
    })
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
            </form>
    </div>
        
    );
}
export default Formregister;
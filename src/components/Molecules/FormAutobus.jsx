import { useRef } from 'react';
import { useState } from 'react';
import '../../assets/style/Autobus.css'
import logo from '../../assets/imgs/Logo.svg';

function FormAutobus() {
    const [numL,setnumL]= useState("")
    const formDataf = useRef("");
    const handlerClick = (e)=>{
        e.preventDefault();
        const formData = new FormData(formDataf.current);
        let URI='http://34.225.239.102/api/autobus/register'
        let options={
        method:'POST',
        headers:{ "Content-Type":'application/json'},
        body:JSON.stringify({
                clave: formData.get('clave'),
                placa:formData.get('placa'),
                numasientos: formData.get('numasientos'),
                fecha: formData.get('fecha'),
                tipo: formData.get('tipo'),
                nombre: formData.get('nombre'),
                licencia: formData.get('licencia'),
        })
    }
    console.log(options.body)
    fetch(URI,options)
    .then(response => response.json())
    .then(data =>{alert(JSON.stringify(data))})
    }
    const handlerClicknumL=(e)=>{
        e.preventDefault();
        let num=Math.floor(Math.random() * 10000 + 10000);
        setnumL(num)
    }

    return ( 
        <div className="container">
            <form ref={formDataf}>
                <img src={logo}></img>
                <div>
                    <label>Clave autobus </label>
                    <div>
                        <input type="text" name="clave"/>
                    </div>
                </div>
                <div>
                    <label>Placa</label>
                    <div>
                        <input type="text" name="placa"/>
                    </div>
                </div>
                <div id="top">
                    <label>Numero de asientos</label>
                    <div>
                        <input type="text" name="numasientos"/>
                    </div>  
                </div> 
                <div id="top"> 
                    <label>Fecha de alta</label>
                    <div>
                        <input type="date" name="fecha"/>
                    </div>
                </div> 
                <div id="top">
                    <label>Tipo</label>
                    <div>
                        <select name="tipo">
                        <option value="Ejecutivo">Ejecutivo</option>
                        <option value="Turista">Turista</option>
                        </select>
                    </div>
                </div>
                <div id="top">
                    <label>Nombre del chofer</label>
                    <div>
                        <input type="text" name="nombre"/>
                    </div>
                </div>
                <div id="top">
                    <label>Numero de licencia</label>
                    <div>
                    <input value={numL}  type="text" name="licencia" />
                    <button onClick={handlerClicknumL}>Generar</button>
                    </div>
                </div>
                <div id="top"><button onClick={handlerClick}>Alta de autobus</button></div>
            </form>
        </div>
     );
}
export default FormAutobus;
import { useRef } from 'react';
import { useState } from 'react';
import '../../assets/style/Autobus.css'
import Header from '../atoms/Header';

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
        <div className="formA">
            <form ref={formDataf}>
            <Header/>
                <input type="text" name="clave" placeholder='Clave Autobus'/>
                <input type="text" name="placa" placeholder='Placa'/>
                <input type="text" name="numasientos" placeholder='Numero de asientos'/>
                <input type="date" name="fecha" placeholder='Fecha de alta'/>
                    <div >
                        <select id="tipo" name="tipo">
                        <option value="Ejecutivo">Ejecutivo</option>
                        <option value="Turista">Turista</option>
                        </select>
                    </div>
                <input type="text" name="nombre" placeholder='Nombre del chofer'/>
                <input value={numL}  type="text" name="licencia" placeholder='Numero de licencia'></input>
                <button onClick={handlerClicknumL}>Generar Numero</button>
                <div>
                <button  id="button2" onClick={handlerClick}>Alta de autobus</button>
                </div>
            </form>
        </div>
     );
}
export default FormAutobus;
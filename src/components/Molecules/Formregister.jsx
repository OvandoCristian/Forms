import { Form } from 'react-router-dom';
import '../../assets/style/Register.css'
import Header from '../atoms/Header';
function Formregister (){
    return (
    <div className='register'>  
        <form>
            <Header/>
                <div>
                 <label>Name</label>
                </div>   
                <div>
                 <input type="text" name='name'/>
                </div>
                <div>
                <label>E-mail</label>
                </div>
                <div>
                    <input type="email" name='e-mail'/>
                </div>
                <div>
                <label>Username</label>
                </div>
                <div>
                    <input type="text" name='username'/>
                </div>
                <div>
                <label>Password</label> 
                </div>
                 <div>
                    <input type="password" name='password'/>
                 </div>
                <div id='top2'>
                 <button>Registro</button>  
                </div>
        </form>
    </div>
        
    );
}
export default Formregister;
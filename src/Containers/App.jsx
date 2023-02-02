import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Autobus from '../pages/Autobus';

function App(){
    return (  
        <BrowserRouter>
             <Routes>
                  <Route path='/Login' element={<Login/>}/>
                  <Route path='/Register' element={<Register/>}/>
                  <Route path='/Autobus'  element={<Autobus/>}/>
             </Routes>
        </BrowserRouter>
    );
}
export default App;
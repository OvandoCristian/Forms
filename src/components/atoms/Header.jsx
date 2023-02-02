import Logo from '../../assets/imgs/Logo.svg' //Objeto
import '../../assets/style/Header.css'
function Header () {
    return ( 
        <header>
            <h5>Cristian Ovando Gómez 221256</h5>    
           <img src={Logo} alt="Logo de la empresa"/>
        </header>
     );
}
export default Header;
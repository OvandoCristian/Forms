import Logo from '../../assets/imgs/Logo.svg' //Objeto
import '../../assets/style/Header.css'
function Header () {
    return ( 
        <header>
           <img src={Logo} alt="Logo de la empresa"/>
        </header>
     );
}
export default Header;
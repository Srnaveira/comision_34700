import CartWidget from '../CartWidget/CartWidget';
import './navbar.scss'

const NavBar = () => {

    return(
        <nav className="container__NavBar">
            <ul className="container__NavBar__principal">
                <li className="container__NavBar__principal__title">EL BAUL</li>
                <li className="container__NavBar__principal__genders">GENEROS
                    <ul className="listGenders">    
                        <li>ACCION</li>
                        <li>CIENCIA-FICCION</li>
                        <li>FANTASIA</li>
                        <li>HISTORICO</li>
                    </ul>
                </li>
            </ul>
            <CartWidget />
            <ul className="container__NavBar__user">    
                <li className="container__NavBar__user--inf">USUARIO</li>
                <ul className="listGenders">
                    <li>CONFIGURACION</li>
                    <li>COMPRAS</li>
                    <li>SALIR</li>
                </ul>            
            </ul>
        </nav>
    );
}

export default NavBar
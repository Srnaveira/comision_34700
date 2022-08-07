import { Link } from 'react-router-dom';
import './navbar.scss'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return(
        <nav className="container__NavBar">
            <ul className="container__NavBar__principal">
                <li className="container__NavBar__principal__title">EL BAUL</li>
                <li className="container__NavBar__principal__genders">GENEROS
                    <ul className="listGenders">    
                        <li>
                            <Link to='/gender/ACCION' className='links'>ACCION</Link>
                        </li>
                        <li>
                            <Link to='/gender/CIENCIA-FICCION' className='links'>CIENCIA-FICCION</Link>
                        </li>
                        <li>
                            <Link to='/gender/FANTASIA' className='links'>FANTASIA</Link>
                        </li>
                        <li>
                            <Link to='/gender/HISTORICO' className='links'>HISTORICO</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <CartWidget />
            <ul className="container__NavBar__user">    
                <li className="container__NavBar__user--inf">USUARIO</li>
                <ul className="listGenders">
                    <li>
                        CONFIGURACION
                    </li>
                    <li>
                        COMPRAS
                    </li>
                    <li>
                        SALIR
                    </li>
                </ul>            
            </ul>
        </nav>
    );
}

export default NavBar
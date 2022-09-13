import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { AuthContext } from '../../Context/AuthContext';
import './navbar.scss'

const NavBar = () => {

    const { userInfo, logout } = useContext(AuthContext)

    return(
        <nav className="container__NavBar">
            <ul className="container__NavBar__principal">
                <li className="container__NavBar__principal__title"><Link className="container__NavBar__principal__title" to={"/"}>EL BAUL</Link></li>
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
                <li className="container__NavBar__user--inf">{userInfo}</li>
                <ul className="listGenders">
                    <li>
                        <Link to="/orders" className='links'>COMPRAS</Link>
                    </li>
                    <li onClick={logout}>
                        SALIR
                    </li>
                </ul>            
            </ul>
        </nav>
    );
}

export default NavBar
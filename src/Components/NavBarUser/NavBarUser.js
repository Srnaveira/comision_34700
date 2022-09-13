import { Link } from 'react-router-dom';
import './navbaruser.scss'

const NavBarUser = () => {
        return(
            <nav className="nav__users">
                <ul className="nav__users__ul">
                    <li className="Nav__useres__ul--li">
                        <Link to={"/login"} className="opciones">
                            INGRESAR
                        </Link>
                    </li>
                    <li className="Nav__useres__ul--li">
                        <Link to={"/createuser"} className="opciones">
                            CREAR CUENTA
                        </Link>
                    </li>
                </ul>
            </nav>
        );
}

export default NavBarUser;
import './footer.css'
import { Link } from 'react-router-dom'


const Footer = () =>{

    return(
        <div className="contenedor__footer">

            <h1>© 2022 EL BAUL</h1>
            <Link to={'/contact'} className="link-contact">
            <h3>CONTACTO</h3>
            </Link>
        </div>
    );
}


export default Footer;
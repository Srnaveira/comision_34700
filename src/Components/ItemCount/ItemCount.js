import { useContext } from 'react';
import { Link , useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import './itemcount.scss';


const ItemCount = ({ stock, onAdd , idProducto }) =>{

    const { isInCart } = useContext(CartContext)

    const volver = useNavigate()    

    const handlerback = () => {
        volver(-1)

    } 


    return(
        <>
            {
                isInCart(idProducto) 
                ?    <div className="contador">                
                        <Link to={'/cart'} className="contador__button2">TERMINAR COMPRA</Link>
                        <button className="contador__button" type="button" onClick={ handlerback } >CONTINUAR COMPRANDO</button>
                     
                     </div>



                :    <div className="contador">                
                        <button disabled={stock === 0} className={stock === 0 ? "contador__disabled" : "contador__button"} type="button" value="AGREGAR AL CARRITO" onClick={ onAdd } >{stock === 0 ? "NO CONTAMOS CON STOCK":"AGREGAR AL CARRITO"}</button>
                        <button className="contador__button" type="button" onClick={ handlerback } >CONTINUAR COMPRANDO</button>
                     </div>

            }
            
        </>
    );

}

export default ItemCount
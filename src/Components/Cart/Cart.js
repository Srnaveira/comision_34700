import { useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { CartContext } from '../../Context/CartContext';
import './cart.scss'

const Cart = () =>{

    const { cart, removeItem, clearCart, calcTotal, endBuy } = useContext(CartContext)

    const volver = useNavigate()

    const handlerBack = () => {
        volver('/')
    }

    return(

        <div className="contenedorCarrito">
            
            {
            cart.map((productos) => (
                <div key={productos.id} className="productos">
                        <img className="imagenes" src={productos.imagen}/>
                        <div className="informacion">
                            <h2 className="titulo" style={{textTransform: 'uppercase'}}>{productos.titulo}</h2>
                            <h3 className="autor">{productos.autor}</h3>
                            <div className="informacion__compra">
                                <p className="comprados">Cantidad:  {productos.numvendido}</p>
                                <h6 className="precio">Precio: ${productos.precio * productos.numvendido}</h6>
                                <button onClick={() => removeItem(productos.id)} className="Eliminar">Eliminar</button>
                            </div>
                        </div>
                </div>
            ))

            }    
            <div className="ContenedorPrecio">
                <p className="precioTotal">Total:</p>
                <p className="precioTotal">$ {calcTotal()}</p>
            </div>
            <div className="ContenedorAccion">
            <button onClick={() => clearCart()} className="Limpiar">LIMPIAR CARRITO</button>
            <Link to={'/'} style={{textDecoration: 'none'}}>
            <button onClick={() => endBuy(cart)} className="FinalizarCompra">TERMINAR COMPRA</button>
            </Link>
            <button onClick={() => handlerBack()} className="SeguirComprando">SEGUIR COMPRANDO</button>
            
            </div>
        </div>
        

    )



}


export default Cart;
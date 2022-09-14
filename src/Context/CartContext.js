import { createContext, useState , useContext} from "react";
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { DB } from '../FirebaseAPI/Config'
import { AuthContext } from "./AuthContext";

export const CartContext = createContext()



const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([])

    const { userData } = useContext(AuthContext)

    const addItem = (producto) =>{

        setCart([...cart, producto])

    }

    const isInCart = (id) =>{

        return cart.some( (producto) => producto.id === id) 

    }

    const calcTotal = () =>{

        return( cart.reduce((acumulador , producto) => acumulador+= producto.precio, 0))

    }

    const removeItem = (id) =>{

        setCart( cart.filter((producto) => producto.id !== id) )

    }

    const clearCart = () =>{

        setCart( [] )

    }


    const endBuy = async (values) => {

        if(values.length > 0){ 
          
               
                const Order = {
                    buyer: {
                        id: userData.id,
                        Nombre: userData.nombre,
                        Apellido: userData.apellido,
                        Telefono: userData.telefono,
                        Correo: userData.correo,
                        Direccion: userData.direccion 
                    },
                    items: values.map((producto) =>({
                        id: producto.id,
                        precio: producto.precio,
                        autor: producto.autor,
                        titulo: producto.titulo,
                        imagen: producto.imagen
                    })),
                    date: serverTimestamp(),
                    total: calcTotal()       
                }

                const newOrder = await addDoc(collection(DB, 'Orders'), Order);
                alert('Se a realizado correctamente su compra su N° de seguimiento es  :' + newOrder.id);

                                
        }
        clearCart()
    }

    

        return(
                <CartContext.Provider value={{ addItem, isInCart, cart, removeItem, clearCart, calcTotal, endBuy}}>

                        {children}

                </CartContext.Provider>
        )

}

export default CartProvider

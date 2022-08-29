import { createContext, useState } from "react";
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { DB } from '../FirebaseAPI/Config'


export const CartContext = createContext()


const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([])


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

            let Order = {
                buyer: {
                    name: 'Leo Messi',
                    phone: '123456789',
                    email: 'leo@messi.com'
                },
                items: values.map((producto) =>({
                    id: producto.id,
                    precio: producto.precio,
                    autor: producto.autor,
                    titulo: producto.titulo
                })),
                date: serverTimestamp(),
                total: calcTotal()       
            }

            const newOrder = await addDoc(collection(DB, 'Orders'), Order);
            alert('Se a realizado correctamente su compra su N° de seguimiento es  :' + newOrder.id);
            clearCart();

        }
           
            
    }

    

        return(
                <CartContext.Provider value={{ addItem, isInCart, cart, removeItem, clearCart, calcTotal, endBuy}}>

                        {children}

                </CartContext.Provider>
        )

}

export default CartProvider

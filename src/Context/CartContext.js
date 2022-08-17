import { createContext, useState } from "react";

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

        return(
                <CartContext.Provider value={{ addItem, isInCart, cart, removeItem, clearCart, calcTotal}}>

                        {children}

                </CartContext.Provider>
        )

}

export default CartProvider

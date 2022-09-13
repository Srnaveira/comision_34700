import './ordercontainer.scss'
import Spinner from '../Spinner/Spinner'
import OrderList from '../OrderList/OrderList'
import { AuthContext } from '../../Context/AuthContext'
import { getOrders } from '../../FirebaseAPI/GetData'
import { useContext, useEffect, useState } from 'react'



const OrderContainer = () => {

    const { user } = useContext(AuthContext)

    const [ ordersUser, setOrdersUser ] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        let arrayTemp = []
        console.log(user)
        getOrders()
            .then((datOrders) => {
                const datosOrders = datOrders.docs.map((doc) =>{
                    return{
                        ...doc.data()
                    }                    
                })
                for(let i=0; i < datosOrders.length ; i++ ){
                        if(datosOrders[i].buyer.Correo === user){
                            arrayTemp.push(datosOrders[i].items);                        
                        }  
                }

                setOrdersUser(arrayTemp)
            }) 
            .catch((error) =>{
                console.log("Error reportado :" , error)
            })
            .finally(() =>{
                setLoading(false)
            })        
    }, [user])



    return(
        <>
            {
            
            loading ? <Spinner />
                    : <OrderList orderUser={ordersUser} />
            
            }
        </>
    )

    
}

export default OrderContainer;
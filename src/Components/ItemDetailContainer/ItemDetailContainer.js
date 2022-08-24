import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProdID } from "../../FirebaseAPI/GetData";
import Spinner from "../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () =>{

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)
    const { itemId } = useParams();

    useEffect(() =>{ 
        getProdID(itemId)
            .then((datProducts) => {
                setItem({ 
                    id: datProducts.id,
                    ...datProducts.data()
                })   
            })
            .catch((error) =>{
                console.log("Error reportado :" , error)
            })
            .finally(() =>{
                setLoading(false)
            })         
    },[itemId])

    return(
            <>
                {
               
                loading ? <Spinner />
                        : <ItemDetail item={item} />
                
                }
            </>

    );

}

export default ItemDetailContainer;

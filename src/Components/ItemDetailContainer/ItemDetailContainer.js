import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProdID } from "../../Mock/GetData";
import Spinner from "../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () =>{

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)
    
    const { itemId } = useParams();

    useEffect(() =>{ 
        getProdID(Number(itemId))
            .then((data) => {
                setItem(data)
            })
            .finally(() =>{
                setLoading(false)
            })
    },[])

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

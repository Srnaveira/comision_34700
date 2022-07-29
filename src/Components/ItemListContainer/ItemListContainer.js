import { useEffect, useState } from "react";
import './itemlistcontainer.css'
import CargarProductos from "../../Mock/CargarProductos";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () =>{

    const [loading, setLoading] = useState(true)
    const [loaddata, setLoaddata] = useState()

    useEffect(() =>{  
        CargarProductos() 
                .then((data) =>{
                    setLoaddata(data)
                })
                .catch((error) =>{
                    console.log("THERE WAS A ERROR  " + error )
                })
                .finally(() => {
                    setLoading(false)
                    
                })
    }, [])

    console.log(loaddata)

    return(
        <div className="principalContenedor">
            {    
            loading ? <Spinner />
                    : <ItemList  items={loaddata}/>
            }
        </div>
    );
}

export default ItemListContainer;
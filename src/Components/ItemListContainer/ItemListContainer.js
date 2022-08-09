import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './itemlistcontainer.css'
import { getGenders, getProducts } from "../../Mock/GetData";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () =>{

    const [loading, setLoading] = useState(true)
    const [loaddata, setLoaddata] = useState()
    const { genderId } = useParams()

    useEffect(() =>{
        setLoading(true)
        if(!genderId){     
            getProducts() 
                .then((data) =>{
                    setLoaddata(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            getGenders(genderId)
                .then((data) =>{
                    setLoaddata(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }        
    }, [genderId])


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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './itemlistcontainer.css'
import { getProducts } from "../../FirebaseAPI/GetData";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () =>{

    const [loading, setLoading] = useState(true)
    const [loaddata, setLoaddata] = useState()
    const { genderId } = useParams()

    useEffect(() =>{
        setLoading(true)
        const collator = new Intl.Collator('en')
        getProducts() 
            .then((datProducts) => {
                const productos =  datProducts.docs.map((doc) => {
                    return{       
                       id: doc.id,
                       ...doc.data()
                    }
                })
                if(!genderId) {
                        const ordenar = (x, y) =>{
                            return collator.compare(x.titulo, y.titulo)
                        }
                        setLoaddata(productos.sort(ordenar))
                } else {
                        setLoaddata( productos.filter((product) => product.genero.toUpperCase() === genderId ))
                }
        })
        .catch((error) => {
                console.log('ERROR', error)
         })
        
         .finally(() =>{
                setLoading(false)
         })

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
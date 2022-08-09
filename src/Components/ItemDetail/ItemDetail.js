import "./itemdetail.scss";
import { useState } from 'react'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) =>{

    const [isIncart, SetIsIncart] = useState(false)

    const [itemIncart, SetItemIncart] = useState([])

    const onAdd = ( number ) => {
        SetIsIncart(true)
        const addCart = {
                ...item,
                Cantcomp: number
            }


        SetItemIncart([...itemIncart, addCart])       
    }
    if(itemIncart.length !== 0){
        setTimeout(() => {
            console.log(itemIncart)    
        }, 1000);
    }
       
     


    return(
        <div className='div__detail'>
            <div className='div__detail__encabezados'>    
                <h1 className="titulo">{item.titulo.toUpperCase()}</h1>
                <h3 className="autor">{item.autor}</h3>
            </div>    
            <div className='div__detail__detalle'>
                    <div className='div__detail__detalle--imagen'>
                            <img src={item.imagen}></img>
                    </div>    
                    <div className='div__detail__detalle--resto'>
                            <p>{item.resumen}</p>
                            <span className='precio'> $ {item.precio} </span>
                            <div>
                                <ItemCount
                                    initiation={Number(1)}
                                    stock={item.stock}
                                    onAdd={ onAdd }
                                    isIncart={ isIncart }
                                />
                            </div>
                    </div>            
            </div>
        </div>
    );

}

export default ItemDetail;
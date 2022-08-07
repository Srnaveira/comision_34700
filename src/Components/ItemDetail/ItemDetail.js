import "./itemdetail.scss";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) =>{

    const onAdd = ( number ) => {
        alert("Estas por comprar: " + number) 
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
                                />
                            </div>
                    </div>            
            </div>
        </div>
    );

}

export default ItemDetail;
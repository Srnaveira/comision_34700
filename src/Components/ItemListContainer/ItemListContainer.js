import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({texto, mensaje}) =>{

    const ondAdd = (cant) =>{
        alert("la cantidad comprada es de :" + cant);

    }


    return(
        <div style={{textAlign: "center"}}>
            <h1 style={{margin: "25px"}}>
                {texto}    
            </h1>
            <div>
                <h3>
                    {mensaje} 
                </h3>
            </div>
            <ItemCount Initiation ={1} stock={5} ondAdd={ondAdd} ></ItemCount>
        </div>
    );
}

export default ItemListContainer;
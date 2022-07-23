

const ItemListContainer = ({texto, mensaje}) =>{

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
        </div>
    );
}

export default ItemListContainer;
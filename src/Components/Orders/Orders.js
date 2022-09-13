import './orders.scss'

const Orders = ({ orders }) => {
   
    for(let index=0; index < orders.length ; index++) {
        

        return(
            <div className="items">
                <img src={orders[index].imagen}></img>
                <div className="itemsOrdenados">
                    <h2>{orders[index].titulo}</h2>
                    <h3>{orders[index].autor}</h3>
                    <h3>$ {orders[index].precio}</h3>
                </div>
        </div>

        )
    }
};

export default Orders



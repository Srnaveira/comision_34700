import './orders.scss'

const Orders = ({ orders }) => {
   
        return(
            <div className="items">
                <img src={orders.imagen}></img>
                <div className="itemsOrdenados">
                    <h2>{orders.titulo}</h2>
                    <h3>{orders.autor}</h3>
                    <h3>$ {orders.precio}</h3>
                </div>
        </div>

        )
};

export default Orders



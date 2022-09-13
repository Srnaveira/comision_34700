import Orders from "../Orders/Orders";
import '../Orders/orders.scss'

const OrderList = ({orderUser}) => {


    return(
            <div className="contenedor__compras">
                {
                 orderUser.map((orders) => <Orders key={orders.id} orders={orders} />)
                }
            </div>

    );

}



export default OrderList;

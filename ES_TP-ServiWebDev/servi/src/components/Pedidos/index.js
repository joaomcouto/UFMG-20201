import React from 'react'
import './Pedidos.css'

import Footer from '../Footer'
import OrderCard from './OrderCard'

import {userServices} from "../../services/"
import {useSelector} from "react-redux"

export default function Pedidos() {

    const [orders, setOrders] = React.useState([]);

    const auth_state = useSelector(state => state.auth.userInfo)

    const getOrders = async () => {
        const data = await userServices.ordersById(auth_state._id);
        setOrders(data);
    }

    React.useEffect( () => {
        getOrders(); // eslint-disable-next-line
    }, []);

    function checkOrders() {

        if (Object.keys(orders).length === 0) {
            return (<p>Você ainda não fez nenhum pedido =(</p>)
        } else { 
            return (orders.map(order => (
                        <OrderCard
                            key={order._id.$oid}
                            user={order.user_id.$oid}
                            service={order.service_id.$oid}
                            data_inicio={order.data_inicio.$date}
                            data_fim={order.data_fim.$date}
                            finalizado={order.finalizado}
                        />
                    )))
        }
    }

    return (
        <div className="pedidos-container">
            <p>Seus Pedidos</p>
            <div className="pedidos">
                {checkOrders()}
            </div>

            <Footer />
        </div>
    )
}

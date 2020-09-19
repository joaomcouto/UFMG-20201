import React from 'react'
import './Pedidos.css';

import Footer from '../Footer'
import OrderCard from './OrderCard'

import { Box, Button, Avatar, Card } from '@material-ui/core';

export default function Pedidos() {

    const [orders, setOrders] = React.useState([]);

    function checkOrders() {
        /* const response = await fetch (url);
        const data = await response.json();
        setOrders(data); */

        if (Object.keys(orders).length === 0) {
            return (<p>Você ainda não fez nenhum pedido =(</p>)
        } else { //change parameters
            return (orders.map(order => (
                        <OrderCard
                            key={order.recipe.label}
                            name={order.recipe.label}
                            image={order.recipe.image}
                            categoria={order.recipe.healthLabels[0]}
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

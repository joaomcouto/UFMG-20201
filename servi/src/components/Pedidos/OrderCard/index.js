import React from 'react'
import './OrderCard.css';

import { Card, CardHeader, Avatar } from '@material-ui/core'

import {userServices} from "../../../services/"
import { LocationOn } from '@material-ui/icons';

export default function OrderCard(props) {

    const [service, setService] = React.useState([]);

    const getService = async () => {
        const data = await userServices.getServiceById(props.service);
        setService(data);
    }

    React.useEffect( () => {
        getService();
    }, []);

    return (
        <div className="order-card">
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar>
                            <LocationOn />
                        </Avatar>
                    }
                    title={service.nome}
                    subheader={<div>
                        {service.categoria} | {(new Date(props.data_inicio)).toLocaleDateString("pt-BR")}
                        <br></br>
                        {props.finalizado ? "Finalizado" : "Em Andamento"}
                    </div>}
                />
            </Card>
        </div>
    )
}

import React from 'react'
import './ShowService.css';

import Footer from '../Footer'

import {useParams} from "react-router-dom"
import {userServices} from "../../services/"

import { Button, Avatar, Card, Divider } from '@material-ui/core';
import { StarRateRounded, LocationOn } from '@material-ui/icons';

export default function ShowService(props) {

    const [service, setService] = React.useState([]);

    let { id } = useParams();

    const getService = async () => {
        const data = await userServices.getServiceById(id);
        setService(data);
    }

    React.useEffect( () => {
        getService();
    }, []);

    return (
        <div className="show-service-container">
            <Avatar className="avatar"><LocationOn fontSize="large"/></Avatar>

            <Card variant="outlined" className="show-service-card show-service-name">
                <h4>{service.nome}</h4>
                <p><StarRateRounded />{service.nota} | {service.categoria}</p>
                <p>{service.endereco}</p>
                <Divider className="divider"/>
                <p>{service.descricao}</p>
            </Card>

            <Button className="contratar-button" variant="outlined">Contratar</Button>

            <Footer />
        </div>
    )
}

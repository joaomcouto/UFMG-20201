import React from 'react'
import './ShowService.css';

import Footer from '../Footer'

import { useParams, useHistory } from "react-router-dom"
import { userServices } from "../../services/"
import { useSelector } from "react-redux"
import { Button, Avatar, Card, Divider } from '@material-ui/core';
import { StarRateRounded, LocationOn } from '@material-ui/icons';

export default function ShowService(props) {

    const [service, setService] = React.useState([]);
    const [hired, setHired] = React.useState(false);
    const userInfo = useSelector(state => state.auth.userInfo)
    const history = useHistory()

    let { id } = useParams();

    const getService = async () => {
        const data = await userServices.getServiceById(id);
        setService(data);
    }

    React.useEffect(() => {
        getService();
    }, []);

    const handleHire = (user_id, service_id) => {
        userServices.hireService(user_id, service_id)
            .then(r => {
                setHired(true);
            })
            .catch(err => {
                setHired(false);
                console.log(err)
            })
    }

    return (
        <div className="show-service-container">
            <Avatar className="avatar"><LocationOn fontSize="large" /></Avatar>

            <Card variant="outlined" className="show-service-card show-service-name">
                <h4>{service.nome}</h4>
                <p><StarRateRounded />{service.nota} | {service.categoria}</p>
                <p>{service.endereco}</p>
                <Divider className="divider" />
                <p>{service.descricao}</p>
            </Card>
            {hired
                ? <Button className="contratar-button" color="primary">Contratado !</Button>
                : <Button className="contratar-button" onClick={() => { handleHire(userInfo._id, id) }} variant="outlined">Contratar</Button>
            }
            {hired &&
                <Button style={{marginTop:"0px"}} className="contratar-button" onClick={() => { history.goBack() }} variant="outlined">Voltar</Button>
            }

            <Footer />
        </div>
    )
}

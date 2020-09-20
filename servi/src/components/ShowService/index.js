import React from 'react'
import './ShowService.css';

import Footer from '../Footer'

import {useParams} from "react-router-dom"

import { Button, Avatar, Card } from '@material-ui/core';

export default function ShowService(props) {

    let { id } = useParams();

    return (
        <div className="show-service-container">
            <Avatar className="avatar">A</Avatar>

            <Card variant="outlined" className="show-service-card show-service-name">
                <h4>{id}</h4>
                <p>E-mail</p>
            </Card>

            <Button className="contratar-button" variant="outlined">Contratar</Button>

            <Footer />
        </div>
    )
}

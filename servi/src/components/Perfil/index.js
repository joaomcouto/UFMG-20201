import React from 'react'
import './Perfil.css';

import Footer from '../Footer'
import {userServices} from "../../services/"
import {Link} from "react-router-dom"

import { Box, Button, Avatar, Card } from '@material-ui/core';

export default function index() {

    function logout() {
        userServices.logout();
        document.location.reload();
    }

    return (
        <div className="profile-container">
            <Avatar className="avatar">A</Avatar>

            <Card variant="outlined" className="profile-card profile-name">
                <h4>Marco Tulio</h4>
                <p>Nome</p>
            </Card>
            <Card variant="outlined" className="profile-card profile-email">
                <h4>marco@marco.com</h4>
                <p>E-mail</p>
            </Card>

            <Button className="logout-button" variant="outlined" onClick={() => logout()}>Logout</Button>

            <Footer />
        </div>
    )
}

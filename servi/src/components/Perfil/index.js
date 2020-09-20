import React from 'react'
import './Perfil.css';

import Footer from '../Footer'
import { userServices } from "../../services/"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { Box, Button, Avatar, Card } from '@material-ui/core';

export default function Perfil() {

    function logout() {
        userServices.logout();
        document.location.reload();
    }

    const userInfo = useSelector(state => state.auth.userInfo)

    return (
        <div className="profile-container">
            <Avatar className="avatar">A</Avatar>

            <Card variant="outlined" className="profile-card profile-name">
                <h4>{userInfo.nome}</h4>
                <p>Nome</p>
            </Card>
            <Card variant="outlined" className="profile-card profile-email">
                <h4>{userInfo.email}</h4>
                <p>E-mail</p>
            </Card>
            <Card variant="outlined" className="profile-card profile-email">
                <h4>{userInfo.telefone}</h4>
                <p>Telefone</p>
            </Card>
            <Card variant="outlined" className="profile-card profile-email">
                <h4>{userInfo.endereco}, {userInfo.cidade}</h4>
                <p>Endereço</p>
            </Card>

            <Button className="logout-button" variant="outlined" onClick={() => logout()}>Logout</Button>

            <Footer />
        </div>
    )
}

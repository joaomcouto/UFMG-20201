import React from 'react'
import './Footer.css';

import {Box, Button } from '@material-ui/core';

import { AccountCircleOutlined, SearchRounded, LibraryBooksOutlined } from '@material-ui/icons';
import {userServices} from "../../services/"
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <div className="footer">
            <Box className="footer-div" component={Link} to="/search">
                <SearchRounded fontSize="large"/>
                <p>Buscar</p>
            </Box>
            <Box className="footer-div" component={Link} to="/orders">
                <LibraryBooksOutlined fontSize="large"/>
                <p>Pedidos</p>
            </Box>
            <Box className="footer-div">
                <AccountCircleOutlined fontSize="large"/>
                <p>Perfil</p>
            </Box>
            <Box className="footer-div" component={Button} onClick={() => {userServices.logout()}} >
                <p>Logout</p>
            </Box>
        </div>
    )
}

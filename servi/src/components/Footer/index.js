import React from 'react'
import './Footer.css';

import { AccountCircleOutlined, SearchRounded, LibraryBooksOutlined } from '@material-ui/icons';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-div">
                <SearchRounded fontSize="large"/>
                <p>Buscar</p>
            </div>
            <div className="footer-div">
                <LibraryBooksOutlined fontSize="large"/>
                <p>Pedidos</p>
            </div>
            <div className="footer-div">
                <AccountCircleOutlined fontSize="large"/>
                <p>Perfil</p>
            </div>
        </div>
    )
}

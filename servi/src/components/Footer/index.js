import React from 'react'
import './Footer.css';

import { AccountCircleOutlined, SearchRounded, LibraryBooksOutlined } from '@material-ui/icons';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-div">
                <SearchRounded fontSize="Large"/>
                <p>Buscar</p>
            </div>
            <div className="footer-div">
                <LibraryBooksOutlined fontSize="Large"/>
                <p>Pendentes</p>
            </div>
            <div className="footer-div">
                <AccountCircleOutlined fontSize="Large"/>
                <p>Perfil</p>
            </div>
        </div>
    )
}

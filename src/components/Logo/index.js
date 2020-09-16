import React from 'react'
import './Logo.css';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"

export default function Logo(props) {

    return (
        <div id="logo">
            <h1>It's Servi</h1>
            <p>...but it does nothing yet.</p>
            <div>
                <Button component={Link} to="/login"  variant="outlined" style={{marginRight: '10px'}}>Entrar</Button>
                <Button component={Link} to="/register" variant="outlined" >Registrar</Button>
            </div>
        </div>
    )
}

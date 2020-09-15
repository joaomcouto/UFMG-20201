import React from 'react'
import './Logo.css';
import Button from '@material-ui/core/Button';

export default function Logo(props) {

    return (
        <div id="logo">
            <h1>It's Servi</h1>
            <p>...but it does nothing yet.</p>
            <div>
                <Button variant="outlined" style={{marginRight: '10px'}}>Entrar</Button>
                <Button variant="outlined" onClick={() => props.setPage('Cadastro')}>Registrar</Button>
            </div>
        </div>
    )
}

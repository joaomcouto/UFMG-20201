import React from 'react'
import Button from '@material-ui/core/Button';

export default function Logo() {

    const [page, setPage] = React.useState("");

    return (
        <div>
            <h1>It's Servi</h1>
            <p>...but it does nothing yet.</p>
            <div>
                <Button variant="outlined" style={{marginRight: '10px'}}>Entrar</Button>
                <Button variant="outlined">Registrar</Button>
            </div>
        </div>
    )
}

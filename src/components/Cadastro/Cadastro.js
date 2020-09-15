import React from 'react'
import './Cadastro.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Cadastro(props) {

    return (
        <div className="form-container">
            <h1>Servi</h1>
            <form id="form-cadastro">
                <div>
                    <TextField required className="form-field" label="Nome" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField required className="form-field" label="E-mail" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField required className="form-field" label="Telefone" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField required className="form-field" label="Endereço" variant="outlined" margin="normal"/>
                </div>
                <div className="form-field-container double-field">
                    <TextField required style={{marginRight: 15}}label="Cidade" variant="outlined" margin="normal"/>
                    <TextField required label="Bairro" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <Button className="submit-button" variant="outlined" onClick={() => props.setPage('Logo')}>Registrar</Button>
                </div>
            </form>
        </div>
    )
}

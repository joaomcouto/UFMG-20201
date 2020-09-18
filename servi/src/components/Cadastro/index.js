import React, {useRef, useState} from 'react'
import './Cadastro.css';

import {TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import {Link} from "react-router-dom"
import {userServices} from "../../services"

export default function Cadastro(props) {

    const nome = useRef()
    const email = useRef()
    const senha = useRef()
    const telefone = useRef()
    const endereco = useRef()
    const cidade = useRef()
    const bairro = useRef()

    const [register_error, setRegister_error] = useState(false)
    const [register_message, setRegister_message] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        setRegister_error(false);

        const form_data = {
            nome:nome.current.value,
            email:email.current.value,
            senha:senha.current.value,
            telefone:telefone.current.value,
            endereco:endereco.current.value,
            cidade:cidade.current.value,
            bairro:bairro.current.value,
        }
        
        userServices.register(form_data)
        .then(r => {
            console.log(r)
        })
        .catch(err => {
            const error_data = err.response.data;
            setRegister_message(error_data.errmsg);
            setRegister_error(true)
        })

      };

    return (
        <div className="form-cadastro-container">
            <h1>Servi</h1>
            <p className="description">Preencha o formulário abaixo para se cadastrar</p>
            {register_error && 
                <Alert severity="error"> {register_message} </Alert> 
            }
            <form id="form-cadastro" onSubmit={onSubmit}>
                <div>
                    <TextField  inputRef={nome} required className="form-field" label="Nome" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField  inputRef={email} required className="form-field" label="E-mail" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField  inputRef={senha} required className="form-field" label="Senha" type="password" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField  inputRef={telefone} required className="form-field" label="Telefone" variant="outlined" margin="normal" type="number"/>
                </div>
                <div>
                    <TextField  inputRef={endereco} required className="form-field" label="Endereço" variant="outlined" margin="normal"/>
                </div>
                <div className="form-field-container double-field-container">
                    <TextField  inputRef={cidade} required className="double-field" style={{marginRight: 15}}label="Cidade" variant="outlined" margin="normal"/>
                    <TextField  inputRef={bairro} required className="double-field" label="Bairro" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <Button className="submit-button" variant="outlined" type="submit">Registrar</Button>
                </div>
            </form>
            <div id="login-div">
                <p>Já possui uma conta?</p>
                <Button component={Link} to="/login" variant="outlined" >Login</Button>
            </div>
        </div>
    )
}

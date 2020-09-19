import React, {useRef} from 'react'
import './Login.css';
import Alert from '@material-ui/lab/Alert';
import {TextField, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {Creators as authCreators} from "../../store/ducks/auth";

import {Link} from "react-router-dom"
import {userServices} from "../../services"

export default function Login(){

    const dispatch = useDispatch()
    const auth_state = useSelector(state => state.auth)

    const history = useHistory()
    
    const email = useRef()
    const senha = useRef()


    const onSubmit = (e) => {
        e.preventDefault();
        const form_data={
            email:email.current.value,
            senha:senha.current.value,
        }

        dispatch(authCreators.login_request())
        userServices.login(form_data)
        .then(r => {
            dispatch(authCreators.login_success(r))
            history.push("/search")
        })
        .catch(err => {
            const error_data = err.response.data;
            console.log(error_data)
            dispatch(authCreators.login_fail(error_data))
        })
    }

    return (
        <div className="form-login-container">
            <h1>Servi</h1>
            {auth_state.error && 
                <Alert severity="error"> {auth_state.error} </Alert> 
            }
            <form id="form-login" onSubmit={onSubmit}>
                <div>
                    <TextField inputRef={email} required className="form-field" label="E-mail" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField inputRef={senha} required className="form-field"  type="password" label="Senha" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <Button className="submit-button" variant="outlined" type="submit">Login</Button>
                </div>
            </form>
            <div id="register-div">
                <p>Ainda não possui uma conta?</p>
                <Button component={Link} to="/register" variant="outlined" >Registrar</Button>
            </div>
        </div>
    )
}

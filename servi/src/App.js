import React, { useEffect } from 'react';
import './App.css';

import Logo from './components/Logo'
import Login from "./components/Login"
import Cadastro from './components/Cadastro'
import Busca from './components/Busca'
import Pedidos from './components/Pedidos'
import PrivateRoute from "./components/PrivateRoute"
import PublicRoute from "./components/PublicRoute"
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import {Creators as authCreators} from "./store/ducks/auth";
import {userServices} from "./services"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(authCreators.login_request())
        userServices.confirm()
            .then(r => {
                dispatch(authCreators.login_success(r))
            })
            .catch(err => {
                const error_data = err.response.data;
                dispatch(authCreators.login_fail(error_data))
            })

    }, []);


    const auth_state = useSelector(state => state.auth.isLogged)

    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute authed={auth_state} exact path="/" component={Logo} />
                <PublicRoute authed={auth_state} path="/login" component={Login} />
                <PublicRoute authed={auth_state} path="/register" component={Cadastro} />
                <PrivateRoute authed={auth_state} path="/search" component={Busca} />
                <PrivateRoute authed={auth_state} path="/orders" component={Pedidos} />
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );

}

export default App;

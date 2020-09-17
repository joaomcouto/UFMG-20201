import React from 'react'
import './Busca.css';

import {TextField, Button } from '@material-ui/core';

import {Link} from "react-router-dom"

export default function Busca() {
    return (
        <div className="busca-container">
            <section>
                <TextField className="search-bar" placeholder="Buscar" variant="outlined" margin="normal"/>
            </section>
            <section>
                <p className="section-name" >Categorias</p>

                <p className="section-name" >Estabelecimentos</p>

            </section>
        </div>
    )
}

import React from 'react'
import './Busca.css';

import Footer from '../Footer'

import {TextField, Button } from '@material-ui/core';

import {Link} from "react-router-dom"

export default function Busca() {
    return (
        <div className="busca-container">
            <section className="search-bar-container">
                <TextField className="search-bar" placeholder="Serviço" variant="outlined"/>
                <Button  variant="outlined">Buscar</Button>
            </section>
            <section>

                {/* Placeholder*/}
                <p className="section-name" >Categorias</p>
                <h4>Aqui eu imagino colocar uns cards com as categorias, tipo no ifood</h4>
                <p className="section-name" >Estabelecimentos</p>
                <h4>E aqui eu imagino colocar uns cards com os estabelecimentos, tipo no ifood tbm</h4>
                {/*  */}

            </section>
            <Footer />
        </div>
    )
}

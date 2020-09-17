import React from 'react'
import './Busca.css';

import Footer from '../Footer'

import SearchCard from './SearchCard'
import CategoryCard from './CategoryCard'

import { TextField, Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

import {Link} from "react-router-dom"

export default function Busca() {

    const [services, setservices] = React.useState(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    const [categories, setcategories] = React.useState(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

    return (
        <div className="busca-container">
            <section className="search-bar-container">
                <TextField className="search-bar" placeholder="Serviço" variant="outlined"/>
                <Button  variant="outlined">Buscar</Button>
            </section>
            <section className="search-content">

                <p className="section-name" >Categorias</p>
                <Carousel >
                    {services.map(card => (
                        <CategoryCard />
                    ))}
                </Carousel>
                <p className="section-name" >Serviços</p>
                {services.map(card => (
                    <SearchCard />
                ))}

            </section>
            <Footer />
        </div>
    )
}

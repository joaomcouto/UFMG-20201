import React from 'react'
import './Busca.css';

import Footer from '../Footer'

import ServiceCard from './ServiceCard'
import CategoryCard from './CategoryCard'

import {userServices} from "../../services/"
import {Link} from "react-router-dom"

import { TextField, Button, Box } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

export default function Busca() {

    const [categories, setCategories] = React.useState([]);
    const [services, setServices] = React.useState([]);
    const [search, setSearch] = React.useState("");

    const getServicesByCat = async (cat) => {
        const data = await userServices.getServicesByCat(cat);
        setServices(data);
    }

    const getServices = async () => {
        const data = await userServices.getServicesByName(search);
        setServices(data);
    }

    const getDefaultServices = async () => {
        const data = await userServices.getServices();
        setServices(data);
    }

    const getCategories = async () => {
        const data = await userServices.getCategories();
        setCategories(data);
    }

    React.useEffect( () => {
        getCategories();
    }, []);

    React.useEffect( () => {
        if (Object.keys(search).length !== 0) {
            getServices();
        } else {
            getDefaultServices();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    function checkCategories() {
        if (Object.keys(categories).length === 0) {
            return (<p>Nenhuma categoria por aqui =(</p>)
        } else {
            return (<Carousel>
                        {categories.map(category => (
                            <Box key={category._id} onClick={() => getServicesByCat(category._id)}>
                                <CategoryCard 
                                    key={category._id}
                                    name={category.nome}
                                    nota={category.nota}
                                    imagem={category.imagem}
                                />
                            </Box>
                        ))}
                    </Carousel>)
        }
    }

    function checkServices() {
        if (Object.keys(services).length === 0) {
            return (<p>Nenhum Serviço por aqui =(</p>)
        } else {
            return (services.map(service => (
                        <Box className="card-link" key={service._id} component={Link}
                            to={"show_service/" + service._id}>
                            <ServiceCard
                                key={service._id}
                                name={service.nome}
                                nota={service.nota}
                                imagem={service.imagem}
                                categoria={service.categoria}
                            />
                        </Box>
                    )))
        }
    }

    return (
        <div className="busca-container">
            <section className="search-bar-container">
                <TextField id="search-bar" className="search-bar" placeholder="Serviço" variant="outlined"/>
                <Button  variant="outlined" onClick={() => setSearch(document.getElementById("search-bar").value)}>Buscar</Button>
            </section>
            <section className="search-content">
                <p className="section-name" >Categorias</p>
                {checkCategories()}
                <p className="section-name" >Serviços</p>
                {checkServices()}
            </section>
            <Footer />
        </div>
    )
}

import React from 'react'
import './Busca.css';

import Footer from '../Footer'

import ServiceCard from './ServiceCard'
import CategoryCard from './CategoryCard'

import { TextField, Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

export default function Busca() {

    const [categories, setCategories] = React.useState([]);
    const [services, setServices] = React.useState([]);
    const [search, setSearch] = React.useState("");

    let id = 'eae40dfa';
    let key = '743456b82f0470fdf3f998613bd1354b';
    let url = `https://api.edamam.com/search?q=${search}&app_id=${id}&app_key=${key}`;

    const getServices = async () => {
        const response = await fetch (url);
        const data = await response.json();
        setServices(data.hits);
        console.log(data);
    }

    React.useEffect( () => {
        if (Object.keys(search).length !== 0) {
            getServices();
        }
    }, [search]);

    function checkCategories() {
        if (Object.keys(categories).length === 0) {
            return (<p>Nenhuma categoria por aqui =(</p>)
        } else {
            return (<Carousel>
                        {categories.map(category => (
                            <CategoryCard />
                        ))}
                    </Carousel>)
        }
    }

    function checkServices() {
        if (Object.keys(services).length === 0) {
            return (<p>Nenhum Serviço por aqui =(</p>)
        } else {
            return (services.map(service => (
                        <ServiceCard
                            id={service.recipe.label}
                            name={service.recipe.label}
                            nota={service.recipe.totalWeight}
                            image={service.recipe.image}
                        />
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

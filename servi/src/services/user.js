import axios from 'axios'

export const userServices = {
    register,
    login,
    confirm,
    logout,
    getCategories,
    getServices,
    getServicesByName,
    getServiceById,
    getServicesByCat,
    orders,
    ordersById,
};

function ordersById(id){
    return axios.get("/orders/?user_id=" + id)
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Register Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function orders(){
    return axios.get("/orders/")
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Register Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function getServicesByCat(cat){
    return axios.get("/services/?category_id=" + cat)
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Register Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function getServiceById(id){
    return axios.get("/services/?id=" + id)
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Register Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function getServicesByName(name){
    return axios.get("/services/" + name)
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Register Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function getServices(){
    return axios.get("/services/")
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Register Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function getCategories(){
    return axios.get("/categories/")
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Register Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function logout(){
    return axios.post("/auth/logout")
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Register Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function register(user){
    return axios.post("/auth/register", user)
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Register Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function login(user){
    return axios.post("/auth/login", user)
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Login Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}

function confirm(){
    return axios.post("/auth/confirm")
    .then(response => {
        if (response.status === 200){
            return response.data
        }else{
            console.log("Login Fail")
            console.log(response.data)
            throw response.data
        }
    })
    .catch(error => {
        throw error
    })
}
import axios from 'axios'

export const userServices = {
    register,
    login,
    confirm,
    logout,
};

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
import axios from 'axios'

export const userServices = {
    register,
};

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
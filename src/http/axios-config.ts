import Axios from 'axios'

Axios.defaults.headers.common['Authorization'] = `Token ${localStorage.authorization_token}`;

export const $axios = Axios.create({
    baseURL: `http://localhost:3000/`,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
    }
})
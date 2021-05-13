import Axios from 'axios'

Axios.defaults.headers.common['Authorization'] = `Token ${localStorage.authorization_token}`;

export const $axios:any = Axios.create({
    baseURL: `http://localhost:5000/`,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
    }
})
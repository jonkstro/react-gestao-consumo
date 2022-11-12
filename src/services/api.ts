import axios from "axios";


// criar objeto que receberá o corpo da url da api
export const api = axios.create({
    baseURL : 'http://localhost:3000/api'
})
import axios from "axios";
export default axios.create({
    baseURL: 'http://localhost:3333/api/',
    headers: {
        'auth-token': import.meta.env.USER__TOKEN
    }
})
import axios from 'axios'

const api = axios.create({
    baseURL : 'http://192.168.148.180:8000'
});

export default api;
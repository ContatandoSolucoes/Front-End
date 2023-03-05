import axios from 'axios'

const api = axios.create({
    baseURL : 'http://192.168.1.106:19006/'
});

export default api;
import axios from 'axios'

const api = axios.create({
    baseURL : 'http://172.16.6.127::8000'
});

export default api;
import axios from 'axios'

const api = axios.create({
    baseURL : 'http://172.16.3.115:8000'
});

export default api;
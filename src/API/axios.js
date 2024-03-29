import axios from 'axios';

axios.defaults.baseURL = 'https://tru.estate:8443';
axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.access_token}`;

window.axios = axios;

export default axios;
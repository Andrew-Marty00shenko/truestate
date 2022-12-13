import axios from 'axios';

axios.defaults.baseURL = 'http://topmail.net.ua:8888';
axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.access_token}`;

window.axios = axios;

export default axios;
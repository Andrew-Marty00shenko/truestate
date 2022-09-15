import axios from 'axios';

axios.defaults.baseURL = 'http://topmail.net.ua:8089';
axios.defaults.headers.common['access_token'] = window.localStorage.access_token;

window.axios = axios;

export default axios;
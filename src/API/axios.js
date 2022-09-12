import axios from 'axios';

axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common['access_token'] = window.localStorage.access_token;

window.axios = axios;

export default axios;
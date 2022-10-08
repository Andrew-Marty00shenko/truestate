import axios from "./axios";

export default {
    saveTransaction: (tx_hash) => axios.post('/save-tx', { tx_hash })
}
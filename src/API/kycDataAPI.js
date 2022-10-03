import axios from "./axios";

export default {
    getKycData: () => axios.get('/user/kyc'),
    deleteDocument: (doctype) => axios.post('/user/delete_document', { doctype }),
    sendKycData: ({ doctype, country, files }) => axios.post('/user/kyc', { doctype, country, files })
};
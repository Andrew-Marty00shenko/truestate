import axios from "./axios";

export default {
    getUserProfile: () => axios.get('/user/profile'),
    saveUserProfile: ({
        password,
        firstname,
        lastname,
        sex,
        birthday,
        address,
        phone,
        citizenship,
        is_usa,
        wallet,
        status,
        lang,
    }) => axios.post('/user/profile', {
        password,
        firstname,
        lastname,
        sex,
        birthday,
        address,
        phone,
        citizenship,
        is_usa,
        wallet,
        status,
        lang,
    })
}
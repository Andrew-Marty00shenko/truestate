import axios from "./axios";

export default {
    registration: ({ login, email, password }) => axios.post("/registration", { login, email, password }),
    confirmation: (user_id, uid) => axios.post("/confirmation", { user_id, uid }),
    login: ({ login, password }) => axios.post("/user/login", { login, password }),
    forgot: ({ email }) => axios.post("/forgot", { email }),
    restore: (user_id, uid) => axios.post("/restore", { user_id, uid }),
    new_password: ({ password }) => axios.post("/new_password", { password }),
    subscribe: (bool) => axios.post("/user/subscribe", { subscribe: bool })
}
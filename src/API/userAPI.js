import axios from "./axios";

export default {
    registration: data => axios.post("/registration", data),
    confirmation: (user_id, uid) => axios.post("/confirmation", { user_id, uid }),
    login: (login, password) => axios.post("/user/login", { login, password }),
    restore: (user_id, uid) => axios.post("/restore", { user_id, uid }),
    new_password: (password) => axios.post("/new-password", password)
}
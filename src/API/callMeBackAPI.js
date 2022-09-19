import axios from "./axios";

export default {
    request: ({
        title,
        firstname,
        lastname,
        phone,
        channel,
        timezone,
        time,
        subject,
        message,
        email,
        lang
    }) => axios.post("/user/request", {
        title,
        firstname,
        lastname,
        phone,
        channel,
        timezone,
        time,
        subject,
        message,
        email,
        lang
    })

}
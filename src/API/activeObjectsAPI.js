import axios from "./axios";

export default {
    getActiveObjects: (skip, limit) => axios.get(`/objects?skip=${skip}&limit=${limit}`),
    getPhotosActiveObjects: (object_id) => axios.get(`/photos?object_id=${object_id}`)
};
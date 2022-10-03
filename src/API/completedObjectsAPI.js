import axios from "./axios";

export default {
    getCompletedObjects: (skip, limit) => axios.get(`/finished?skip=${skip}&limit=${limit}`),
    getPhotosCompletedObjects: (object_id) => axios.get(`/photos_finished?object_id=${object_id}`)
};
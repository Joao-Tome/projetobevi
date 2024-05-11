import axios from "axios";

const configAxios = {
    baseURL: process.env.REACT_APP_BASE_URL
}

export const instanceAxios = axios.create(configAxios);

export function AddApiKey(ApiKey){
    if (ApiKey != null){
        instanceAxios.defaults.headers.common['Authorization'] = 'Bearer ' + ApiKey
    }
}

export default instanceAxios;

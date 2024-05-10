import axios from "axios";

const configAxios = {
    baseURL: process.env.REACT_APP_BASE_URL
}

const instanceAxios = axios.create(configAxios);

export default instanceAxios;
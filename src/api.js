import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "8597e491ed6e80f0de12e349eb60ea6e",
        language: "en-US"
    }
});

export default api;
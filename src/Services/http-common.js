import axios from "axios";

export default axios.create({
    baseURL: "https://34.134.232.249/api/",
    headers: {
        "Content-type": "application/json",
    }
});

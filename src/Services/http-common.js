import axios from "axios";

export default axios.create({
    baseURL: "https://playmusic.com.mx/api/",
    headers: {
        "Content-type": "application/json",
    }
});

import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        "token": localStorage.getItem("token"),
        "user": localStorage.getItem("user")
    }
});
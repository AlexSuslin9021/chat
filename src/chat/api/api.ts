import axios from "axios";

export const instance = axios.create({
    baseURL:'https://api.lenzaos.com/',
    headers: {
        version: "0.0"
    }
});
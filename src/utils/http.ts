import axios from "axios";
import { APP_API_URL } from "~constants";

export const http = axios.create({
    baseURL: APP_API_URL,
})
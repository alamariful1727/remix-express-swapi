import axios from "axios";

const restAPI = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export default restAPI;
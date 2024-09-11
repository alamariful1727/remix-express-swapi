import axios from "axios";

const restAPI = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:4040/api",
});

export default restAPI;
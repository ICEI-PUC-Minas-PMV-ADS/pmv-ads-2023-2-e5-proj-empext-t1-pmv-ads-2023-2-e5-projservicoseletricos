import axios from "axios";

const http = axios.create({
  baseURL: "https://localhost:7223/",
});

export default http;

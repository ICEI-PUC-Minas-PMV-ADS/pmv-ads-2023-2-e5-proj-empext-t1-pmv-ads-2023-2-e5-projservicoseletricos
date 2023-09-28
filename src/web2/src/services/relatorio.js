import axios from "axios";

const relatorio = axios.create({
  baseURL: "http://localhost:5001/",
});

export default relatorio;

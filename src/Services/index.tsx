import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-matheus.herokuapp.com",
});

export default api;

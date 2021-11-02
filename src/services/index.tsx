import axios from "axios";

const api = axios.create({
  baseURL: "https://api-hamburgueria-kenzie.herokuapp.com/",
});

export default api;

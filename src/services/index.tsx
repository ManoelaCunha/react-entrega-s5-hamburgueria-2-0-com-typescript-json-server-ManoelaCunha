import axios from "axios";

const api = axios.create({
  baseURL: "https://api-hamburgueria-kenzie.vercel.app/",
});

export default api;

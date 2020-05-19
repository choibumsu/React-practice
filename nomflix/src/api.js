import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "10bf06f43d1c4680d8b89cf6b20394a6";
  config.params["language"] = "en-US";
  return config;
});

export default api;

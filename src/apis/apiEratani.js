import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.eratani.co.id",
});

export default instance;

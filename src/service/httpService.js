import axios from "axios";
import CONFIG from "../config.json";

let bearer_token = localStorage.getItem("access_token");

const axiosInstance = axios.create({
  baseURL: CONFIG.apiUrl,
  headers: { Authorization: `Bearer ${bearer_token}` },
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
};

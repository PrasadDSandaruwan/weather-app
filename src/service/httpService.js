import axios from "axios";
// import { apiUrl } from "../config.json";

let bearer_token = localStorage.getItem("access_token");

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  headers: { Authorization: `Bearer ${bearer_token}` },
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
};

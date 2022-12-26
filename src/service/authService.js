import jwtDecode from "jwt-decode";

import http from "./httpService";
import CONFIG from "../config.json";

const apiEndpoint = CONFIG.apiUrl + "user/login";

export async function login(email, password) {
  console.log("email", email);
  console.log("email", password);

  const response = await http.post(
    apiEndpoint,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
}

export function loginWithJwt(access_token, refresh_token) {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("access_token");
    const user = jwtDecode(jwt);

    return user;
  } catch (ex) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("force_change");
}

export function getJwt() {
  return localStorage.getItem("access_token");
}

export default {
  login,
  loginWithJwt,
  getCurrentUser,
  logout,
  getJwt,
};

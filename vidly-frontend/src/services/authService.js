import http from "./httpService";
import jwtDecode from "jwt-decode";


const apiEndpoint = "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { datat: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}
export function loginJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
export function logout() {
  localStorage.removeItem(tokenKey);
}
export function getUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
    //ignoring the error if the there is no web token in order to have the application crushed
  } catch (ex) {
    return null;
  }
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginJwt,
  logout,
  getUser,
  getJwt,
};

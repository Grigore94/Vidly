import http from "./httpService";
//obj destructuring for config
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";

export async function login(email, password) {
  const {datat: jwt} = await http.post(apiEndpoint, { email, password });
  localStorage.setItem("token", jwt);
}
export function logout() {
  localStorage.removeItem("token");
}
export function getUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
    //ignoring the error if the there is no web token in order to have the application crushed
  } catch (ex) {
    return null;
  }
}

 export default {
   login,
   logout,
   getUser
 }
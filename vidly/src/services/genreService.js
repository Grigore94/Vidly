import http from "./httpService";
//obj destructoring config.
import { apiUrl } from "../config.json";

export function getGenres() {
  return http.get(apiUrl + "/genres");
}

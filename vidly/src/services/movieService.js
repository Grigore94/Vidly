import http from "./httpService";
//obj destructuring for config
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovies(movieId) {
  return http.get(apiEndPont + '/' + movieId);
}

export function saveMovie(movie) {
  
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "16af760cd75db9c5314b5d97f67ad665";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const fetchData = async (url = "", query = null) => {
  const response = await axios(url, { params: { query } });
  return (response.status = 200
    ? await response.data
    : Promise.reject(new Error("Page Not Found")));
};

export function fetchTrendingMovies() {
  return fetchData("trending/movie/day");
}
export function fetchMoviesByKeyword(guery) {
  return fetchData("search/movie", guery);
}
export function fetchMovieDetails(movieId) {
  return fetchData(`movie/${movieId}`);
}
export function fetchMovieCredits(movieId) {
  return fetchData(`movie/${movieId}/credits`);
}
export function fetchMovieReviews(movieId) {
  return fetchData(`movie/${movieId}/reviews`);
}

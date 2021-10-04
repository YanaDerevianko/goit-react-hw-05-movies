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
    ? await response.data.results
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

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

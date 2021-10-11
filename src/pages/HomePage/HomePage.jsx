import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {fetchTrendingMovies} from "../../API/api";

export default function Homepage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
    .then(r => setMovies(r.results))
    .catch((error) => console.log(error.message));
  }, []);
  return (
    <>
      <h1>Most popular movies today</h1>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
}

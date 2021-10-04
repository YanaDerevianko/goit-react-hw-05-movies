import { useState, useEffect } from "react";
import * as fetchData from "../../API/api";

export default function Homepage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchData.fetchTrendingMovies().then(setMovies);
    console.log(movies)
  }, []);
  return (
    <>
    <h1>Most popular movies today</h1>
    {movies && movies.map((movie) => <li key={movie.id}> {movie.title} <div>{movie.overview}</div></li>)}
    </>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as fetchData from "../../API/api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if(movieId) {
      fetchData.fetchMovieDetails(movieId).then(setMovie);
    }
    console.log(movie)
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}({movie.release_date.substr(0, 4)})</h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.name}</p>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </>
      )}
    </>
  );
}

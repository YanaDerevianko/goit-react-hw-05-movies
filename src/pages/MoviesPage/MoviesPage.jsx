import React, { useState, useEffect } from "react";
import {
  Route,
  NavLink,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import { fetchMoviesByKeyword } from "../../API/api";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import {
  SearchForm,
  InputForm,
  FormButton,
  Title,
  ListMovies,
  MovieItem,
  MoviePoster,
  MovieTitle,
  NavLinkStyle,
} from "./MoviesPage.styled.jsx";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const { path, url } = useRouteMatch();
  const { movieId } = useParams();

  const location = useLocation();
  const search = location.search.slice(1);

  useEffect(() => {
    if (query) {
      fetchMoviesByKeyword(query)
        .then((r) => setMovies(r.results))
        .catch((error) => setError(error.message));
    }
  }, [query]);
  useEffect(() => {
    if (!query && location.search !== "") {
      setQuery(search);
    }
  }, [location.search, query, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { textInput } = e.target;
    setQuery(textInput.value);
    textInput.value = "";
  };

  return (
    <>
      <Title>Here you can find a movie by keyword</Title>
      <SearchForm onSubmit={handleSubmit}>
        <InputForm
          type="text"
          id="textInput"
          placeholder="Enter movie title..."
        />
        <FormButton type="submit">Search</FormButton>
      </SearchForm>
      {error && (
        <div>
          <p>Something went wrong. {error}</p>
        </div>
      )}
      {movies && (
        <ListMovies>
          {movies.map((movie) => (
            <NavLink
              style={NavLinkStyle}
              key={movie.id}
              to={{
                pathname: `${url}/${movie.id}`,
                state: {
                  from: {
                    pathname: location.pathname,
                    search: query,
                  },
                },
              }}
            >
              <MovieItem>
                <MoviePoster
                  alt="Movie cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                />
                <MovieTitle>{movie.name || movie.title}</MovieTitle>
              </MovieItem>
            </NavLink>
          ))}
        </ListMovies>
      )}
      {movieId && (
        <Route path={path}>
          <MovieDetailsPage />
        </Route>
      )}
    </>
  );
}

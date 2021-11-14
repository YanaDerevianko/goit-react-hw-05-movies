import { useState, useEffect } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { fetchTrendingMovies } from "../../API/api";
import {
  ContentBox,
  Title,
  List,
  ListItem,
  NavLinkStyle,
  Image,
} from "./HomePage.styled.jsx";

export default function Homepage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then((r) => setMovies(r.results))
      .catch((error) => setError(error.message));
  }, []);
  return (
    <ContentBox>
       {error && (
        <div>
          <p>Movies not found. {error}</p>
        </div>
      )}
      <Title>Most popular movies today</Title>
      {movies && (
        <List>
          {movies.map((movie) => (
            <NavLink to={`${url}movies/${movie.id}`} style={NavLinkStyle}>
              <ListItem key={movie.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                {movie.title}
              </ListItem>
            </NavLink>
          ))}
        </List>
      )}
      <hr />
    </ContentBox>
  );
}

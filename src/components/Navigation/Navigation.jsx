import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/movies">Search</NavLink>
      <NavLink to="/movies/:movieId">movies</NavLink>
      <NavLink to="/movies/:movieId/cast">cast</NavLink>
      <NavLink to="/movies/:movieId/reviews">reviews</NavLink>
    </nav>
  );
};

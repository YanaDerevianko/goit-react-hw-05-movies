import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import AppBAr from "./components/AppBar/AppBar";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage  from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';

export default function App() {
  return (
    <div>
      <AppBAr />
      <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/movies" exact>
        <MoviesPage />
      </Route>
      <Route path="/movies/:movieId"> 
      <MovieDetailsPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
      </Switch >
    </div>
  );
}



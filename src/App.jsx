import {lazy, Suspense} from 'react';
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Loader from "react-loader-spinner";
import {LoaderBox, Container} from './App.styled.jsx';

const Homepage = lazy(() => import('./pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "NotFoundPage" */));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */));


export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={ <LoaderBox> <Loader
              color="#5F9EA0"
              type="ThreeDots"
              timeout={7000}
              height={150}
              width={150}
            /></LoaderBox>}>
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
      </Switch>
      </Suspense>
    </Container>
  );
}

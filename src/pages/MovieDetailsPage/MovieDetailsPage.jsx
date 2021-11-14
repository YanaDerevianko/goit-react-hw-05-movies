import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";

import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import * as fetchData from "../../API/api";
import {
  Button,
  Image,
  InfoWrapper,
  InfoMovie,
  NavLinkStyle,
  ActiveNavLinkStyle,
  ButtonWrapper,
  LoaderBox,
} from "./MovieDetailsPage.styled.jsx";

const Cast = lazy(() =>
  import("../../components/Cast/Cast" /* webpackChunkName: "Cast" */)
);
const Review = lazy(() =>
  import("../../components/Review/Review" /* webpackChunkName: "Review" */)
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (movieId) {
      fetchData
        .fetchMovieDetails(movieId)
        .then(setMovie)
        .catch((error) => setError(error.message));
    }
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      {error && (
        <div>
          <p>This movie not found. {error}</p>
        </div>
      )}
      <Button onClick={handleGoBack}>Go back</Button> <br></br>
      {movie && (
        <InfoMovie>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <InfoWrapper>
            <h2>
              {movie.title}({movie.release_date.substr(0, 4)})
            </h2>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            {movie.genres.map((g) => (
              <span key={g.name}>{g.name} </span>
            ))}
            <hr />
            <h3>Additional information</h3>
            <ButtonWrapper>
              <NavLink
                to={`${match.url}/cast`}
                style={NavLinkStyle}
                activeStyle={ActiveNavLinkStyle}
              >
                Cast
              </NavLink>
              <br />
              <NavLink
                to={`${match.url}/reviews`}
                style={NavLinkStyle}
                activeStyle={ActiveNavLinkStyle}
              >
                Reviews
              </NavLink>
            </ButtonWrapper>
          </InfoWrapper>
        </InfoMovie>
      )}
      <hr />
      <Suspense
        fallback={
          <LoaderBox>
            {" "}
            <Loader
              color="#5F9EA0"
              type="ThreeDots"
              timeout={7000}
              height={150}
              width={150}
            />
          </LoaderBox>
        }
      >
          <Route path={`${match.path}/cast`}>
            <Cast />
          </Route>
        <Route path={`${match.path}/reviews`}>
          <Review />
        </Route>
      </Suspense>
    </>
  );
}

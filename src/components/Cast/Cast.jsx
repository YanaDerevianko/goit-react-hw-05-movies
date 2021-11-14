import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as fetchData from "../../API/api";
import {CastList, OneCast, CastFoto, CastName, CastRole, Title} from './Cast.styled.jsx';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      fetchData.fetchMovieCredits(movieId).then(setCast).catch((error) => setError(error.message));
    }
  }, [movieId]);
  return (
    <>
    {error && (
        <div>
          <p>Casts not found. {error}</p>
        </div>
      )}
     <Title title="casts">Actors of this film</Title>
      {cast && (
        <CastList>
          {Object.values(cast)[1].map((c) => (
            <OneCast key={c.id}>
              <CastFoto
                src={`https://image.tmdb.org/t/p/w500/${c.profile_path}`}
                alt={c.name}
              />
              <CastName>{c.name}</CastName>
              <CastRole>Character: {c.character}</CastRole>
            </OneCast>
          ))}
        </CastList>
      )}
    </>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as fetchData from "../../API/api";
import {
  ReviewList,
  OneReview,
  AuthorReview,
  TextReview,
  TextReviewNotFound,
} from "./Review.styled.jsx";

export default function Review() {
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      fetchData.fetchMovieReviews(movieId).then(setReview).catch((error) => setError(error.message));;
    }
  }, [movieId]);
    return (
    <>
    {error && (
        <div>
          <p>Reviews not found. {error}</p>
        </div>
      )}
      {review?.results?.length === 0 && (
        <TextReviewNotFound>
          There are no reviews for this movie
        </TextReviewNotFound>
      )}
      {review && (
        <ReviewList>
          {Object.values(review)[2].map((r) => (
            <OneReview key={r.id}>
              <AuthorReview>Author: {r.author}</AuthorReview>
              <TextReview>{r.content}</TextReview>
            </OneReview>
          ))}
        </ReviewList>
      )}
    </>
  );
}

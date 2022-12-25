import { getReviews } from 'components/FetchAPI/FetchAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'components/Reviews/Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(data => setMovieReviews(data.data.results));
  }, [movieId]);

  return (
    <ul>
      {movieReviews.length !== 0 ? (
        movieReviews.map(review => (
          <li key={review.id}>
            <p>
              <span className={css.label}>Author: </span>
              {review.author}
            </p>
            <p className={css.text}> {review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews</p>
      )}
    </ul>
  );
};

export default Reviews;

import { getTranding } from 'components/FetchAPI/FetchAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from 'components/MoviesList/MovieList.module.css';

export const MoviesList = () => {
  const location = useLocation();
  const [moviesTrand, setMoviesTrand] = useState([]);

  useEffect(() => {
    getTranding().then(data => setMoviesTrand(data.data.results));
  }, []);
  return (
    <ul className={css.list}>
      {moviesTrand.map(movie => (
        <li className={css.item} key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt=""
            />
            <p className={css.text}>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

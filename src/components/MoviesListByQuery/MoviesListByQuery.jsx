import { Link, useLocation } from 'react-router-dom';
import css from 'components/MoviesListByQuery/MoviesListByQuery.module.css';

export const MoviesListByQuery = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {moviesList.map(movie => (
        <li className={css.item} key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <img
              className={css.img}
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

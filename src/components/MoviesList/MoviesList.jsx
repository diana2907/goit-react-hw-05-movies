import { Link, useLocation } from 'react-router-dom';
import css from 'components/MoviesList/MovieList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li className={css.item} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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

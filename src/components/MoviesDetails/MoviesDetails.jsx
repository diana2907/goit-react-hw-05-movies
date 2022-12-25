import { BackLink } from 'components/BackLink/Backlink';
import { getDetails } from 'components/FetchAPI/FetchAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from 'components/MoviesDetails/MoviesDetails.module.css';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [moviesDetail, setMoviesDetail] = useState({});

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getDetails(movieId).then(data => setMoviesDetail(data.data));
  }, [movieId]);

  return (
    <div>
      <BackLink to={backLinkHref}>
        <BsFillArrowLeftCircleFill />
        <p>Back to movies</p>
      </BackLink>
      <div className={css.movie_card}>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w200${moviesDetail.poster_path}`}
          alt=""
        />
        <div className={css.box_description}>
          <h2 className={css.title}>
            {moviesDetail.title} (
            {new Date(moviesDetail.release_date).getFullYear()})
          </h2>
          <p className={css.text}>
            User Score: {Math.round(moviesDetail.vote_average * 10)} %
          </p>
          <h3 className={css.title}>Overview</h3>
          <p className={css.text}>{moviesDetail.overview}</p>
          <h3 className={css.title}>Genres</h3>
          {moviesDetail.genres &&
            moviesDetail.genres.map(genre => genre.name).join(', ')}
        </div>
      </div>
      <div>
        <h3 className={css.title}>Additional information</h3>
        <ul>
          <li className={css.item}>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li className={css.item}>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;

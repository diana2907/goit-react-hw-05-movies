import { getCredits } from 'components/FetchAPI/FetchAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'components/Cast/Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getCredits(movieId).then(data => setMovieCast(data.data.cast));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {movieCast.map(actor => (
        <li className={css.item} key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : 'https://st2.depositphotos.com/1531183/5706/v/600/depositphotos_57064855-stock-illustration-unknown-person-silhouette-whith-red.jpg'
            }
            alt=""
          />
          <div className={css.text}>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

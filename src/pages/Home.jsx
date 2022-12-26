import { getTranding } from 'components/FetchAPI/FetchAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from 'pages/Home.module.css';
const Home = () => {
  const [moviesTrand, setMoviesTrand] = useState([]);

  useEffect(() => {
    getTranding().then(data => setMoviesTrand(data.data.results));
  }, []);
  return (
    <div className={css.box}>
      <h1 className={css.title}>Trending Today</h1>
      <MoviesList movies={moviesTrand} />
    </div>
  );
};

export default Home;

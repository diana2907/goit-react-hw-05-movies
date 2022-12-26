import { searchMovies } from 'components/FetchAPI/FetchAPI';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from 'pages/Movies.module.css';
import { useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (movieName) {
      searchMovies(movieName).then(data => setMoviesList(data.data.results));
    }
  }, [movieName]);
  const handleFormSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main className={css.box}>
      <SearchBox onSubmit={handleFormSubmit} />
      <MoviesList movies={moviesList} />
    </main>
  );
};

export default Movies;

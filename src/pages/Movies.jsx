import { searchMovies } from 'components/FetchAPI/FetchAPI';
import { MoviesListByQuery } from 'components/MoviesListByQuery/MoviesListByQuery';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from 'pages/Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const [moviesList, setMoviesList] = useState([]);

  const updateQueryString = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  const handleFormSubmit = movieName => {
    if (movieName) {
      searchMovies(movieName).then(data => setMoviesList(data.data.results));
    }
  };

  return (
    <main className={css.box}>
      <SearchBox
        onSubmit={handleFormSubmit}
        onChange={updateQueryString}
        value={movieName}
      />
      <MoviesListByQuery moviesList={moviesList} />
    </main>
  );
};

export default Movies;

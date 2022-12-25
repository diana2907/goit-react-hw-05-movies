import { MoviesList } from 'components/MoviesList/MoviesList';
import css from 'pages/Home.module.css';
const Home = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>Trending Today</h1>
      <MoviesList />
    </div>
  );
};

export default Home;

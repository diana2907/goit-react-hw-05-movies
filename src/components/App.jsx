import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const SharedLayout = lazy(() =>
  import('../components/SharedLayout/SharedLayout')
);
const Home = lazy(() => import('../pages/Home'));

const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const MoviesDetails = lazy(() => import('./MoviesDetails/MoviesDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

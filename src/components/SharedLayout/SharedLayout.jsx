import { NavLink, Outlet } from 'react-router-dom';
import css from 'components/SharedLayout/SharedLayout.module.css';
import { Suspense } from 'react';

const SharedLayout = () => {
  let activeStyle = {
    backgroundColor: 'yellow',
    color: 'black',
  };

  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink
            to="/"
            end="true"
            className={css.nav_link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            className={css.nav_link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;

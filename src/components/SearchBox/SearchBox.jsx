import 'react-toastify/dist/ReactToastify.css';
import css from 'components/SearchBox/SearchBox.module.css';
import { ImSearch } from 'react-icons/im';

export const SearchBox = ({ onSubmit }) => {
  const submitForm = evt => {
    evt.preventDefault();

    onSubmit(evt.target.elements.query.value);
  };

  return (
    <form className={css.form} onSubmit={submitForm}>
      <input
        className={css.input}
        name="query"
        type="text"
        placeholder="Search films"
      />
      <button className={css.btn} type="submit">
        <ImSearch />
      </button>
    </form>
  );
};

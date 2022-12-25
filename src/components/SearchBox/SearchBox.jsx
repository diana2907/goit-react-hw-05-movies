import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from 'components/SearchBox/SearchBox.module.css';
import { ImSearch } from 'react-icons/im';

export const SearchBox = ({ onSubmit, onChange, value }) => {
  const submitForm = evt => {
    evt.preventDefault();

    if (value.trim() === '') {
      toast.info('You entered an empty  string', { theme: 'colored' });
      return;
    }
    onSubmit(value);
  };

  return (
    <form className={css.form} onSubmit={submitForm}>
      <input
        className={css.input}
        onChange={evt => onChange(evt.target.value.toLowerCase())}
        type="text"
        placeholder="Search films"
        value={value}
      />
      <button className={css.btn} type="submit">
        <ImSearch />
      </button>
    </form>
  );
};

import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'storeRedux/sliceFilter';
import { filterSelector } from 'storeRedux/selectors';

function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  const changeFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

export default Filter;

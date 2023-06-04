import css from './FilterContact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const filterContact = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <label className={css.Label}>
      <span className={css.Span}>Find contacts by name</span>
      <input
        className={css.Input}
        type="text"
        value={value}
        onChange={filterContact}
        name="filter"
      />
    </label>
  );
};

export default Filter;

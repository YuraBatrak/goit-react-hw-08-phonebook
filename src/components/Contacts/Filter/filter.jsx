import { useDispatch } from 'react-redux';
import { addFilter } from '../../../redux/phonebook/slice';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const handleFilter = ({ currentTarget: { value } }) => {
    dispatch(addFilter(value.toLowerCase()));
  };

  return (
    <div>
      <h3 className={s.contacts_title}>Find contacts by name</h3>
      <input
        className={s.filer_text}
        type="text"
        placeholder=""
        onChange={handleFilter}
      />
    </div>
  );
}

export default Filter;

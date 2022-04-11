import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from '../../../redux/phonebook/operations';
import selectors from '../../../redux/phonebook/selectors';

function ContactList() {
  const [deleteContact] = useDeleteContactMutation();
  const { data: contacts, isFetching } = useGetContactsQuery();

  const filter = useSelector(selectors.filter);

  let visibleContacts = null;

  const getFilteredContacts = () => {
    if (!contacts) {
      return;
    }

    visibleContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter)
    );
  };

  getFilteredContacts();

  return (
    <ul className={s.list}>
      {isFetching && <p>Loading</p>}
      {contacts &&
        visibleContacts.map(({ id, name, number }) => (
          <li className={s.filer_item} key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button
              className={s.filter_button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;

import { useSelector } from 'react-redux';
import s from './ContactsView.module.css';
import Section from '../../Contacts/Section/section';
import ContactsList from '../../Contacts/ContactList/ContactList';
import ContactForm from '../../Contacts/ContactForm/ContactForm';
import Filter from '../../Contacts/Filter/filter';
import authSelectors from '../../../redux/authorization/selectors';

export default function ContactsView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <div className={s.box}>
          <Section title={'Phonebook'}>
            <ContactForm />
          </Section>

          <Section title={'Contacts'}>
            <Filter />
            <ContactsList />
          </Section>
        </div>
      )}
    </>
  );
}

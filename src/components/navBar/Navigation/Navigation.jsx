import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import authSelectors from '../../../redux/authorization/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink className={s.nav_item} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={s.nav_item} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

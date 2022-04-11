import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className={s.nav}>
      <NavLink className={s.nav_item} to="/register">
        Register
      </NavLink>

      <NavLink className={s.nav_item} to="/login">
        Login
      </NavLink>
    </nav>
  );
}

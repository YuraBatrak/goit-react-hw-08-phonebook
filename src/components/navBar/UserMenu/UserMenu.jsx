import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './UserMenu.module.css';
import authSelectors from '../../../redux/authorization/selectors';
import { useLogOutUserMutation } from '../../../redux/authorization/operations';

export default function UserMenu() {
  const navigate = useNavigate();
  const [logOutUser] = useLogOutUserMutation();

  const userName = useSelector(authSelectors.getUserName);

  const onBtnLogOutClick = () => {
    navigate('/');
    logOutUser();
  };

  return (
    <div>
      <span>Welcome {userName} </span>
      <button className={s.nav_button} type="button" onClick={onBtnLogOutClick}>
        Logout
      </button>
    </div>
  );
}

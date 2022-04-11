import { FcBusinessman } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import s from './HomeView.module.css';
import authSelectors from '../../../redux/authorization/selectors';

export default function HomeView() {
  const userName = useSelector(authSelectors.getUserName);

  return (
    <h1 className={s.title}>
      Welcome {userName} <FcBusinessman />
    </h1>
  );
}

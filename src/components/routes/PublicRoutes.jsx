import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import authSelectors from '../../redux/authorization/selectors';

export default function PrivateRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return shouldNavigate ? <Navigate to={redirectTo} replace /> : children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.node,
  restricted: PropTypes.bool,
};

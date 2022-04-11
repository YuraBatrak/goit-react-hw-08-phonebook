import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PrivateRoute from './components/routes/PrivateRoutes';
import PublicRoute from './components/routes/PublicRoutes';
import authSelectors from './redux/authorization/selectors';
import { useGetCurrentUserMutation } from './redux/authorization/operations';

import AppBar from './components/navBar/AppBar/AppBar';
import Container from './components/Container/Container';

const HomeView = lazy(() => import('./components/views/HomeView/HomeView'));
const ContactsView = lazy(() =>
  import('./components/views/ContactsView/ContactsView')
);
const LoginView = lazy(() => import('./components/views/LoginView/LoginView'));
const RegisterView = lazy(() => import('./components/views/RegisterView'));

export default function App() {
  const [getCurrentUser] = useGetCurrentUserMutation();
  const isRefreshingCurrentUser = useSelector(authSelectors.getCurrentUser);
  useEffect(() => getCurrentUser(), [getCurrentUser]);

  return (
    <>
      <Container>
        <AppBar />
      </Container>

      {isRefreshingCurrentUser && <p>Refreshing...</p>}

      {!isRefreshingCurrentUser && (
        <Container>
          <Suspense fallback={<>Loading</>}>
            <Routes>
              <Route path="/" element={<HomeView />} />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              />

              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/" restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />

              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Container>
      )}
    </>
  );
}

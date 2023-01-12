import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import * as api from '../../utils/api/MainApi';
import PrivateRoute from '../../hok/PrivateRoute';
import CurrentUserProvider from '../../hok/CurrentUserProvider';
import IsLoggedInProvider from '../../hok/IsLoggedInProvider';
import PublicRoute from '../../hok/PublicRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const checkLoggedIn = () => {
    api
      .getInfoAboutUser()
      .then((res) => {
        if (res.data) {
          const { name, email } = res.data;
          setLoggedIn(true);
          setCurrentUser({name, email});
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);

  const handleLogin = (email, password) => {
    return api.login(email, password).then(() => {
      setLoggedIn(true);
      navigate('/movies', { replace: true });
    });
  };
  const handleRegister = (name, email, password) => {
    return api.register(name, email, password).then(() => {
      handleLogin(email, password);
    });
  };

  return (
    <div className="app">
      <IsLoggedInProvider value={loggedIn}>
        <CurrentUserProvider value={currentUser}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route
                path="movies"
                element={
                  <PrivateRoute>
                    <Movies />
                  </PrivateRoute>
                }
              />
              <Route
                path="saved-movies"
                element={
                  <PrivateRoute>
                    <SavedMovies />
                  </PrivateRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="signup"
              element={
                <PublicRoute>
                  <Register onRegister={handleRegister} />
                </PublicRoute>
              }
            />
            <Route
              path="signin"
              element={
                <PublicRoute>
                  <Login onLogin={handleLogin} />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CurrentUserProvider>
      </IsLoggedInProvider>
    </div>
  );
}

export default App;

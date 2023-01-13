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
import SuccessInfoToolTip from '../InfoToolTip/SuccessInfoToolTip/SuccessInfoToolTip';
import FailInfoToolTip from '../InfoToolTip/FailInfoToolTip/FailInfoToolTip';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccessInfoToolTip, setIsSuccessInfoToolTip] = useState({ isOpen: false, message: '' });
  const [isFailInfoToolTip, setIsFailInfoToolTip] = useState({ isOpen: false, message: '' });
  const navigate = useNavigate();

  const checkLoggedIn = () => {
    api
      .getInfoAboutUser()
      .then((res) => {
        if (res.data) {
          const { name, email } = res.data;
          setLoggedIn(true);
          setCurrentUser({ name, email });
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
    return api
      .login(email, password)
      .then(() => {
        checkLoggedIn();
      })
      .then(() => {
        navigate('/movies', { replace: true });
      });
  };
  const handleRegister = (name, email, password) => {
    return api.register(name, email, password).then(() => {
      handleLogin(email, password);
    });
  };
  const handleSignOut = () => {
    api
      .signout()
      .then((res) => {
        setLoggedIn(false);
        setCurrentUser({});
        return res;
      })
      .then((res) => {
        setIsSuccessInfoToolTip({ ...isSuccessInfoToolTip, isOpen: true, message: res.message });
        navigate('/', { replace: true });
      });
  };
  const handleUpdateInfoUser = (name, email) => {
    return api.updateInfoUser(name, email).then(() => {
      setCurrentUser({ name, email });
    });
  };
  const closePopups = () => {
    setIsSuccessInfoToolTip({ isOpen: false, message: '' });
    setIsFailInfoToolTip({ isOpen: false, message: '' });
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
                    <Profile onUpdateInfoUser={handleUpdateInfoUser} onSignOut={handleSignOut} />
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
          <SuccessInfoToolTip
            handleClose={closePopups}
            isOpen={isSuccessInfoToolTip.isOpen}
            title={isSuccessInfoToolTip.message}
          />
          <FailInfoToolTip
            handleClose={closePopups}
            isOpen={isFailInfoToolTip.isOpen}
            title={isFailInfoToolTip.message}
          />
        </CurrentUserProvider>
      </IsLoggedInProvider>
    </div>
  );
}

export default App;

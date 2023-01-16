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
import InfoToolTip from '../InfoToolTip/InfoToolTip';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoToolTip, setIsInfoToolTip] = useState({ isOpen: false, status: '', message: '' });
  const [isOpenPreloader, setIsOpenPreloader] = useState(false);
  const [loadCheckLoggedIn, setLoadCheckLoggedIn] = useState(false);
  const [errorLogin, setErrorLogin] = useState('');
  const [errorRegister, setErrorRegister] = useState('');
  const navigate = useNavigate();

  const handleToolTipOpen = (status, message) => {
    setIsInfoToolTip({ ...isInfoToolTip, isOpen: true, status, message });
  };
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
      .then(() => {
        setLoadCheckLoggedIn(true);
      })
      .catch((error) => {
        setLoadCheckLoggedIn(true);
        console.log(error);
      });
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);

  const handleLogin = (email, password) => {
    setIsOpenPreloader(true);
    return api
      .login(email, password)
      .then((res) => {
        checkLoggedIn();
        return res;
      })
      .then((res) => {
        setIsOpenPreloader(false);
        handleToolTipOpen('success', res.message);
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        setIsOpenPreloader(false);
        if (error.message) {
          setErrorLogin(error.message);
          setTimeout(() => {
            setErrorLogin('');
          }, 3000);
        } else {
          handleToolTipOpen('fail', 'Ошибка при авторизации');
          console.log(error);
        }
      });
  };
  const handleRegister = (name, email, password) => {
    return api.register(name, email, password).then(() => {
      handleLogin(email, password);
    }).catch((error) => {
      if (error.message) {
        setErrorRegister(error.message);
        setTimeout(() => {
          setErrorRegister('');
        }, 3000);
      } else {
        handleToolTipOpen('fail', 'Ошибка при регистрации');
        console.log(error);
      }
    })
  };
  const handleSignOut = () => {
    setIsOpenPreloader(true);
    api
      .signout()
      .then((res) => {
        if (res) {
          setLoggedIn(false);
          setCurrentUser({});
          navigate('/', { replace: true });
          return res;
        }
      })
      .then((res) => {
        setIsOpenPreloader(false);
        handleToolTipOpen('success', res.message);
      })
      .catch((error) => {
        setIsOpenPreloader(false);
        handleToolTipOpen('fail', 'Ошибка при выходе');
      });
  };
  const handleUpdateInfoUser = (name, email) => {
    return api.updateInfoUser(name, email).then(() => {
      setCurrentUser({ name, email });
    });
  };
  const handleCloseInfoToolTip = () => {
    setIsInfoToolTip({ isOpen: false, status: '', message: '' });
  };
  return (
    <div className="app">
      <IsLoggedInProvider value={loggedIn}>
        <CurrentUserProvider value={currentUser}>
          {loadCheckLoggedIn && (
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
                      <Profile
                        isOpenPreloader={isOpenPreloader}
                        onUpdateInfoUser={handleUpdateInfoUser}
                        onSignOut={handleSignOut}
                      />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route
                path="signup"
                element={
                  <PublicRoute>
                    <Register
                      onRegister={handleRegister}
                      errorRegister={errorRegister}
                      isOpenPreloader={isOpenPreloader}
                    />
                  </PublicRoute>
                }
              />
              <Route
                path="signin"
                element={
                  <PublicRoute>
                    <Login
                      onLogin={handleLogin}
                      errorLogin={errorLogin}
                      isOpenPreloader={isOpenPreloader}
                    />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}

          <InfoToolTip
            onClose={handleCloseInfoToolTip}
            isOpen={isInfoToolTip.isOpen}
            status={isInfoToolTip.status}
            title={isInfoToolTip.message}
          />
        </CurrentUserProvider>
      </IsLoggedInProvider>
    </div>
  );
}

export default App;

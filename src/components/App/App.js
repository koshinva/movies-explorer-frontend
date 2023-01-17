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
import * as moviesApi from '../../utils/api/MoviesApi';
import PrivateRoute from '../../hok/PrivateRoute';
import CurrentUserProvider from '../../hok/CurrentUserProvider';
import IsLoggedInProvider from '../../hok/IsLoggedInProvider';
import PublicRoute from '../../hok/PublicRoute';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import { moviesFilter } from '../../utils/moviesFilter';
import { localStorageGetItem, localStorageSetItem } from '../../utils/handleLocalStorage';
import PreloaderProvider from '../../hok/PreloaderProvider';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoToolTip, setIsInfoToolTip] = useState({ isOpen: false, status: '', message: '' });
  const [isOpenPreloader, setIsOpenPreloader] = useState(false);
  const [loadCheckLoggedIn, setLoadCheckLoggedIn] = useState(false);
  const [errorLogin, setErrorLogin] = useState('');
  const [errorRegister, setErrorRegister] = useState('');
  const [errorProfile, setErrorProfile] = useState('');
  const [moviesData, setMoviesData] = useState([]);
  const [querySearchMovies, setQuerySearchMovies] = useState('');
  const [shortFilmFilter, setShortFilmFilter] = useState(false);
  const navigate = useNavigate();

  const handleToolTipOpen = (status, message) => {
    setIsInfoToolTip({ ...isInfoToolTip, isOpen: true, status, message });
  };
  const isEmptyInputError = () => {
    handleToolTipOpen('fail', 'Нужно ввести ключевое слово');
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
  const getMovies = () => {
    setIsOpenPreloader(true);
    if (!querySearchMovies) {
      setIsOpenPreloader(false);
      return;
    }
    moviesApi
      .getMoviesInfo()
      .then((res) => {
        const moviesResult = moviesFilter(res, querySearchMovies, shortFilmFilter);
        setMoviesData(moviesResult);
        localStorageSetItem(moviesResult, querySearchMovies, shortFilmFilter);
      })
      .then(() => {
        setIsOpenPreloader(false);
      })
      .catch((error) => {
        setIsOpenPreloader(false);
        handleToolTipOpen(
          'fail',
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
      });
  };
  useEffect(() => {
    getMovies();
  }, [querySearchMovies, shortFilmFilter]);
  useEffect(() => {
    checkLoggedIn();
    localStorageGetItem(setMoviesData, setQuerySearchMovies, setShortFilmFilter);
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
    return api
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((error) => {
        if (error.message) {
          setErrorRegister(error.message);
          setTimeout(() => {
            setErrorRegister('');
          }, 3000);
        } else {
          handleToolTipOpen('fail', 'Ошибка при регистрации');
          console.log(error);
        }
      });
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
    setIsOpenPreloader(true);
    return api
      .updateInfoUser(name, email)
      .then((res) => {
        const { name, email } = res.data;
        setCurrentUser({ name, email });
      })
      .then(() => {
        setIsOpenPreloader(false);
        handleToolTipOpen('success', 'Данные успешно изменены');
      })
      .catch((error) => {
        setIsOpenPreloader(false);
        if (error.message) {
          setErrorProfile(error.message);
          setTimeout(() => {
            setErrorProfile('');
          }, 3000);
        } else {
          handleToolTipOpen('fail', 'Ошибка при изменении данных');
          console.log(error);
        }
      });
  };
  const handleCloseInfoToolTip = () => {
    setIsInfoToolTip({ isOpen: false, status: '', message: '' });
  };
  return (
    <div className="app">
      <IsLoggedInProvider value={loggedIn}>
        <CurrentUserProvider value={currentUser}>
          <PreloaderProvider value={isOpenPreloader}>
            {loadCheckLoggedIn && (
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Main />} />
                  <Route
                    path="movies"
                    element={
                      <PrivateRoute>
                        <Movies
                          isEmptyInputError={isEmptyInputError}
                          moviesData={moviesData}
                          setQuerySearchMovies={setQuerySearchMovies}
                          shortFilmFilter={shortFilmFilter}
                          setShortFilmFilter={setShortFilmFilter}
                          querySearchMovies={querySearchMovies}
                        />
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
                          onUpdateInfoUser={handleUpdateInfoUser}
                          onSignOut={handleSignOut}
                          errorProfile={errorProfile}
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
          </PreloaderProvider>
        </CurrentUserProvider>
      </IsLoggedInProvider>
    </div>
  );
}

export default App;

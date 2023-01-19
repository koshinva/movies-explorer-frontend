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
import PreloaderProvider from '../../hok/PreloaderProvider';
import { extractMovieData } from '../../utils/extractMovieData';
import {
  DATA_SUCCESSFULLY_CHANGED_MESSAGE,
  ERROR_CHANGING_DATA_MESSAGE,
  ERROR_LOGIN_MESSAGE,
  ERROR_MOVIE_REMOVE_MESSAGE,
  ERROR_MOVIE_SAVED_MESSAGE,
  ERROR_NEED_KEYWORD_MESSAGE,
  ERROR_REGISTER_MESSAGE,
  ERROR_SIGNOUT_MESSAGE,
  MOVIE_REMOVE_MESSAGE,
  MOVIE_SAVED_MESSAGE,
} from '../../utils/messageConst';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoToolTip, setIsInfoToolTip] = useState({ isOpen: false, status: '', message: '' });
  const [isOpenPreloader, setIsOpenPreloader] = useState(false);
  const [loadCheckLoggedIn, setLoadCheckLoggedIn] = useState(false);
  const [errorLogin, setErrorLogin] = useState('');
  const [errorRegister, setErrorRegister] = useState('');
  const [errorProfile, setErrorProfile] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();

  const handleToolTipOpen = (status, message) => {
    setIsInfoToolTip({ ...isInfoToolTip, isOpen: true, status, message });
    setTimeout(() => {
      setIsInfoToolTip({ isOpen: false, status: '', message: '' });
    }, 1500);
  };
  const isEmptyInputError = () => {
    handleToolTipOpen('fail', ERROR_NEED_KEYWORD_MESSAGE);
  };

  const checkLoggedIn = () => {
    api
      .getInfoAboutUser()
      .then((res) => {
        if (res.data) {
          const { name, email, _id } = res.data;
          setLoggedIn(true);
          setCurrentUser({ name, email, _id });
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
  const getSavedMovies = () => {
    setIsOpenPreloader(true);
    return api
      .getMoviesFromFavorite()
      .then(({ data: savedMovies }) => {
        const ownSavedMovies = savedMovies.filter((m) => m.owner === currentUser._id);
        setSavedMovies(ownSavedMovies);
        localStorage.setItem('saved-movies', JSON.stringify(ownSavedMovies));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsOpenPreloader(false);
      });
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies();
    }
  }, [loggedIn]);

  const handleLogin = (email, password) => {
    setIsOpenPreloader(true);
    return api
      .login(email, password)
      .then((res) => {
        checkLoggedIn();
        return res;
      })
      .then((res) => {
        handleToolTipOpen('success', res.message);
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        if (error.message) {
          setErrorLogin(error.message);
          setTimeout(() => {
            setErrorLogin('');
          }, 3000);
        } else {
          handleToolTipOpen('fail', ERROR_LOGIN_MESSAGE);
          console.log(error);
        }
      })
      .finally(() => {
        setIsOpenPreloader(false);
      });
  };
  const handleRegister = (name, email, password) => {
    setIsOpenPreloader(true);
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
          handleToolTipOpen('fail', ERROR_REGISTER_MESSAGE);
          console.log(error);
        }
      })
      .finally(() => {
        setIsOpenPreloader(false);
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
          localStorage.clear();
          return res;
        }
      })
      .then((res) => {
        handleToolTipOpen('success', res.message);
      })
      .catch((error) => {
        handleToolTipOpen('fail', ERROR_SIGNOUT_MESSAGE);
      })
      .finally(() => {
        setIsOpenPreloader(false);
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
        handleToolTipOpen('success', DATA_SUCCESSFULLY_CHANGED_MESSAGE);
      })
      .catch((error) => {
        if (error.message) {
          setErrorProfile(error.message);
          setTimeout(() => {
            setErrorProfile('');
          }, 3000);
        } else {
          handleToolTipOpen('fail', ERROR_CHANGING_DATA_MESSAGE);
          console.log(error);
        }
      })
      .finally(() => {
        setIsOpenPreloader(false);
      });
  };
  const handleAddMovieToFavorite = (movie) => {
    return api
      .addMovieToFavorite(movie)
      .then(({ data: newMovie }) => {
        const moviesAfterSave = [newMovie, ...JSON.parse(localStorage.getItem('saved-movies'))];
        setSavedMovies(moviesAfterSave);
        localStorage.setItem('saved-movies', JSON.stringify(moviesAfterSave));
        handleToolTipOpen('success', MOVIE_SAVED_MESSAGE);
      })
      .catch((error) => {
        handleToolTipOpen('fail', ERROR_MOVIE_SAVED_MESSAGE);
        console.log(error);
      });
  };
  const handleRemoveMovieFromFavorite = (id) => {
    return api
      .deleteMovieFromFavorite(id)
      .then(() => {
        const moviesAfterDelete = JSON.parse(localStorage.getItem('saved-movies')).filter(
          (movie) => movie._id !== id
        );
        setSavedMovies(moviesAfterDelete);
        localStorage.setItem('saved-movies', JSON.stringify(moviesAfterDelete));
        handleToolTipOpen('success', MOVIE_REMOVE_MESSAGE);
      })
      .catch((error) => {
        handleToolTipOpen('fail', ERROR_MOVIE_REMOVE_MESSAGE);
        console.log(error);
      });
  };
  const handleMovieLike = (movie, isLiked) => {
    if (!isLiked) {
      handleAddMovieToFavorite(extractMovieData(movie));
    } else {
      const idMovieOnDelete = savedMovies.find((m) => m.movieId === movie.id)._id;
      handleRemoveMovieFromFavorite(idMovieOnDelete);
    }
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
                          handleMovieLike={handleMovieLike}
                          isEmptyInputError={isEmptyInputError}
                          setIsOpenPreloader={setIsOpenPreloader}
                          handleToolTipOpen={handleToolTipOpen}
                        />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="saved-movies"
                    element={
                      <PrivateRoute>
                        <SavedMovies
                          savedMovies={savedMovies}
                          setSavedMovies={setSavedMovies}
                          isEmptyInputError={isEmptyInputError}
                          handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
                        />
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
                      <Register onRegister={handleRegister} errorRegister={errorRegister} />
                    </PublicRoute>
                  }
                />
                <Route
                  path="signin"
                  element={
                    <PublicRoute>
                      <Login onLogin={handleLogin} errorLogin={errorLogin} />
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

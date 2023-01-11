import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (name, email, password) => {
    return api.register(name, email, password).then(() => {
      setLoggedIn(true);
      navigate('/movies', { replace: true });
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="signup" element={<Register onRegister={handleRegister} />} />
        <Route path="signin" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

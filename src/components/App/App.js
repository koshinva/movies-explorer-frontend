import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="signup" element={<Register />} />
        <Route path="signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

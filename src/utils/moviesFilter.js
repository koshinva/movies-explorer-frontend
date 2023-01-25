import { SHORT_FILM_DURATION } from './constants';

export const moviesFilter = (listMovies, query, filter = false) => {
  if (!filter) {
    return listMovies.filter((movie) => movie.nameRU.toLowerCase().includes(query.toLowerCase()));
  }
  return listMovies
    .filter((movie) => movie.nameRU.toLowerCase().includes(query.toLowerCase()))
    .filter((movie) => movie.duration <= SHORT_FILM_DURATION);
};

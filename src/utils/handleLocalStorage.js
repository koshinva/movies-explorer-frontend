export const localStorageSetItem = (listMovies, query, filter) => {
  localStorage.setItem('movies-info', JSON.stringify(listMovies));
  localStorage.setItem('query-search-movies', query);
  localStorage.setItem('short-film-filter', filter);
};
export const localStorageGetItem = (setListMovies, setQuery, setFilter) => {
  setListMovies(JSON.parse(localStorage.getItem('movies-info')) || []);
  setQuery(localStorage.getItem('query-search-movies') || '');
  setFilter(JSON.parse(localStorage.getItem('short-film-filter')) || false);
};
export const localStorageSetSavedMovies = (savedListMovies) => {
  localStorage.setItem('saved-movies-info', JSON.stringify(savedListMovies));
};
export const localStorageGetSavedMovies = () => {
  return JSON.parse(localStorage.getItem('saved-movies-info'));
};

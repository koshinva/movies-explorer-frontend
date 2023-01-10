import { BEATFILM_URL } from './beatfilm.url';

const headers = {
  'Content-type': 'application/json',
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getMoviesInfo = () => {
  return fetch(BEATFILM_URL, { headers }).then(checkResponse);
};

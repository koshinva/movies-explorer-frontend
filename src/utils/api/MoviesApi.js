import { BEATFILM_URL } from './beatfilm.url';
import { checkResponse } from './checkResponse';

const headers = {
  'Content-type': 'application/json',
};

export const getMoviesInfo = () => {
  return fetch(BEATFILM_URL, { headers }).then(checkResponse);
};

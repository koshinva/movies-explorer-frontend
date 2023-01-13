import { BASE_URL } from './base.url';
import { checkResponse } from './checkResponse';

const options = { headers: { 'Content-Type': 'application/json' }, credentials: 'include' };

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    ...options,
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    ...options,
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};
export const signout = () => {
  return fetch(`${BASE_URL}/signout`, { ...options }).then(checkResponse);
};
export const getInfoAboutUser = () => {
  return fetch(`${BASE_URL}/users/me`, { ...options }).then(checkResponse);
};
export const updateInfoUser = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    ...options,
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
};

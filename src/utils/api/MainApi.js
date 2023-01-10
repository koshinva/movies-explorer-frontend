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

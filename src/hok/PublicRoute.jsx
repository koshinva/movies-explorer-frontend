import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLoggedIn } from '../hooks/useLoggedIn';

function PublicRoute({ children }) {
  const loggedIn = useLoggedIn();
  return !loggedIn ? children : <Navigate to="/" />;
}

export default PublicRoute;

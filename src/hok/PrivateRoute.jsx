import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLoggedIn } from '../hooks/useLoggedIn';

function PrivateRoute({ children }) {
  const loggedIn = useLoggedIn();
  return loggedIn ? children : <Navigate to="/signup" replace="true" />;
}

export default PrivateRoute;

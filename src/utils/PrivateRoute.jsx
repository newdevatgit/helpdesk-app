import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requiredRole }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const role = localStorage.getItem('role'); // e.g., 'user' or 'ot'

  if (!isLoggedIn) return <Navigate to="/signin" />;
  if (requiredRole && role !== requiredRole) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;

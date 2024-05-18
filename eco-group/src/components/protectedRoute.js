import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const user = localStorage.getItem('token');
  console.log('token', user);
  return user ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
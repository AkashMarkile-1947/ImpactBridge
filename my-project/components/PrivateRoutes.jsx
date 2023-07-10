import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = sessionStorage.getItem('login-data') !== null;
  const navigate = useNavigate();

  if (!isLoggedIn && navigate) {
    navigate('/login');
    return null;
  }

  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;

import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './components/AuthContext'; // 경로 수정

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { auth } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!auth.isLoggedIn) {
      alert('로그인 후 이용해주세요.');
      setShouldRedirect(true);
    }
  }, [auth.isLoggedIn]);

  if (shouldRedirect) {
    return <Navigate to="/login" />;
  }

  return auth.isLoggedIn ? <Component {...rest} /> : null;
};

export default PrivateRoute;

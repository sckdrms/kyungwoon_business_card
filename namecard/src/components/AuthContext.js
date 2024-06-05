import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = sessionStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : { isLoggedIn: false, username: '', usertitle: '', useremail: '', userphone: '' };
  });

  const navigate = useNavigate(); // useNavigate 훅 사용

  const login = (username, usertitle, useremail, userphone) => {
    const authData = { isLoggedIn: true, username, usertitle, useremail, userphone };
    setAuth(authData);
    sessionStorage.setItem('auth', JSON.stringify(authData));
  };

  const logout = useCallback(async () => {
    try {
      await fetch('/logout', { method: 'GET' });
      const authData = { isLoggedIn: false, username: '', usertitle: '', useremail: '', userphone: '' };
      setAuth(authData);
      sessionStorage.removeItem('auth');
      alert('로그아웃 되었습니다.');
      navigate('/'); // 홈 경로로 이동
    } catch (error) {
      console.error('Failed to logout', error);
    }
  }, [navigate]);

  const checkSession = useCallback(async () => {
    try {
      const response = await fetch('/check-session', { method: 'GET' });
      if (response.status === 401) {
        logout();
      }
    } catch (error) {
      console.error('Failed to check session', error);
    }
  }, [logout]);

  useEffect(() => {
    if (auth.isLoggedIn) {
      const interval = setInterval(checkSession, 5 * 1000); // 5초마다 세션 체크
      return () => clearInterval(interval);
    }
  }, [auth.isLoggedIn, checkSession]); // 'checkSession' 추가

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isLoggedIn: false, username: '', usertitle: '', useremail: '', userphone: '' });

  const login = (username, usertitle, useremail, userphone) => {
    setAuth({ isLoggedIn: true, username, usertitle, useremail, userphone });
  };

  const logout = () => {
    setAuth({ isLoggedIn: false, username: '', usertitle: '', useremail: '', userphone: '' });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

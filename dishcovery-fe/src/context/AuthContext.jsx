// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // In real app you'll get this from API / localStorage
  const [user, setUser] = useState(null);

  const login = () => {
    // dummy user for now
    setUser({
      name: 'Pranav B.',
      bio: 'Food lover • Home cook',
      avatarUrl: '' // keep empty => use initials
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

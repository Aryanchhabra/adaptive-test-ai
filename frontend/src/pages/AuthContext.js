// src/AuthContext.js
import React, { createContext, useState } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Create a Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const login = () => {
    // Here you would typically handle authentication logic (e.g., API call)
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const logout = () => {
    // Here you would typically handle logout logic
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

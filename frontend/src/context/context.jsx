// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const rootUrl = 'http://localhost:3001';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  const login = async (email, password) => {
    toggleError();
    setIsLoading(true);
    try {
      const response = await axios.post(`${rootUrl}/login`, { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setUser(response.data.user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toggleError(true, error.response ? error.response.data.error : 'Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const checkToken = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`${rootUrl}/verifyToken`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      }
    } catch (error) {
      localStorage.removeItem('token');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkToken();
  }, [user]);

  return <AuthContext.Provider value={{ user, isLoading, error, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../api/authApi";

const AuthContext = createContext(null);
const STORAGE_KEY = "dishcovery_auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // hydrate from localStorage on load
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setUser(parsed.user || null);
        setToken(parsed.token || null);
      }
    } catch (err) {
      console.warn("Failed to read auth from storage", err);
    }
  }, []);

  // persist auth state
  useEffect(() => {
    const payload = user ? { user, token } : null;
    if (payload) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user, token]);

  const login = async (email, password) => {
    try {
      const response = await loginUser({ email, password });
      const authUser =
        response.user || {
          email,
          name: response.name || email.split("@")[0],
        };
      const authToken = response.token || response.accessToken || null;

      setUser(authUser);
      setToken(authToken);

      return { success: true };
    } catch (err) {
      console.error("Login failed", err);
      const message =
        err?.body ||
        err?.message ||
        "Unable to sign in. Please check your credentials.";
      return { success: false, message };
    }
  };

  const signup = async ({ firstName, lastName, email, password }) => {
    try {
      const response = await registerUser({
        firstName,
        lastName,
        email,
        password,
      });

      // Some APIs return user + token on signup. If so, auto-login.
      const authUser =
        response.user || {
          email,
          name: `${firstName || ""} ${lastName || ""}`.trim() || email,
        };
      const authToken = response.token || response.accessToken || null;

      if (authToken) {
        setUser(authUser);
        setToken(authToken);
      }

      return { success: true, autoLoggedIn: !!authToken };
    } catch (err) {
      console.error("Signup failed", err);
      const message =
        err?.body || err?.message || "Unable to create account right now.";
      return { success: false, message };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

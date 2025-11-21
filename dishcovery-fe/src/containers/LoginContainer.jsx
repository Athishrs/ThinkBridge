// src/containers/LoginContainer.jsx
import React, { useState } from 'react';
import { LoginPage } from '../pages/LoginPage';
import { loginUser } from '../api/authApi';
import { useAuth } from '../context/AuthContext';

export const LoginContainer = () => {
  const { login } = useAuth(); // if you want to set user after success later
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Please enter email and password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await loginUser({
        email: form.email,
        password: form.password,
      });

      // later you can pass real user data here
      login(data?.user || null);
      // later: navigate to home/dashboard
    } catch (err) {
      console.error(err);
      setError('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // later: navigate('/forgot-password')
    console.log('Forgot password clicked');
  };

  return (
    <LoginPage
      form={form}
      loading={loading}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
    />
  );
};

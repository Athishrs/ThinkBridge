// src/containers/RegisterContainer.jsx
import React, { useState } from 'react';
import { RegisterPage } from '../pages/RegisterPage';
import { registerUser } from '../api/authApi';

export const RegisterContainer = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // quick basic validation
    if (!form.firstName || !form.email || !form.password) {
      setError('Please fill in required fields.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      await registerUser({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });

      setSuccessMessage('Account created successfully!');
      // later: navigate to login/dashboard
    } catch (err) {
      console.error(err);
      setError('Unable to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterPage
      form={form}
      loading={loading}
      error={error}
      successMessage={successMessage}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

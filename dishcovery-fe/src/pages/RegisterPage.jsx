// src/pages/RegisterPage.jsx
import React from 'react';

export const RegisterPage = ({
  form,
  loading,
  error,
  successMessage,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Register</h1>

        <form className="auth-form" onSubmit={onSubmit}>
          {/* Name */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="firstName">
              Name
            </label>
            <input
              id="firstName"
              type="text"
              className="auth-input"
              value={form.firstName}
              onChange={(e) => onChange('firstName', e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="auth-input"
              value={form.lastName}
              onChange={(e) => onChange('lastName', e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="auth-input"
              value={form.email}
              onChange={(e) => onChange('email', e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="password">
              Create Password
            </label>
            <input
              id="password"
              type="password"
              className="auth-input"
              value={form.password}
              onChange={(e) => onChange('password', e.target.value)}
            />
          </div>

          {error && <p className="auth-error">{error}</p>}
          {successMessage && <p className="auth-success">{successMessage}</p>}

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? 'Submitting…' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

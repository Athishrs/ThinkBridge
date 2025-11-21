import React from 'react';

export const ContactPage = ({ form, onChange, onSubmit, submitting }) => {
  return (
    <div className="auth-page contact-page">
      <h1 className="auth-page-title">Contact Us</h1>

      <div className="auth-card contact-card">
        <form onSubmit={onSubmit}>
          {/* Name */}
          <div className="auth-form-group">
            <label htmlFor="contact-name" className="auth-label">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              className="auth-input"
              value={form.name}
              onChange={(e) => onChange('name', e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="auth-form-group">
            <label htmlFor="contact-email" className="auth-label">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              className="auth-input"
              value={form.email}
              onChange={(e) => onChange('email', e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div className="auth-form-group">
            <label htmlFor="contact-message" className="auth-label">
              Message
            </label>
            <textarea
              id="contact-message"
              className="auth-input auth-textarea"
              rows={4}
              value={form.message}
              onChange={(e) => onChange('message', e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="auth-submit-btn btn-dark"
            disabled={submitting}
          >
            {submitting ? 'Submitting…' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

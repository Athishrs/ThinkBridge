// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <section className="page page-not-found">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you’re looking for doesn’t exist.</p>
    <Link to="/">Go back home</Link>
  </section>
);
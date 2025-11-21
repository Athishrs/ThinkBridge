// src/components/common/Button.jsx
import React from 'react';

export const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const className = `btn btn-${variant}`;

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
import React, { useState } from 'react';
import { ContactPage } from '../pages/ContactPage';

export const ContactContainer = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: call backend API here
    console.log('Contact form submitted:', form);

    setTimeout(() => {
      setSubmitting(false);
      // simple reset for now
      setForm({ name: '', email: '', message: '' });
      alert('Thanks for reaching out!');
    }, 500);
  };

  return (
    <ContactPage
      form={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      submitting={submitting}
    />
  );
};

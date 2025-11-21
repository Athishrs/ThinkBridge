// src/components/faq/FaqAccordion.jsx
import React, { useState } from 'react';

const FaqItem = ({ id, question, answer, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
      <button
        className="faq-header"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        <span className="faq-question">{question}</span>

        <span className="faq-toggle-btn" aria-hidden="true">
          <span className={`faq-toggle-icon ${isOpen ? 'open' : ''}`}>⌄</span>
        </span>
      </button>

      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export const FaqAccordion = ({ items }) => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <FaqItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

// src/components/filters/SmartFilter.jsx
import React, { useState } from 'react';

export const SmartFilter = ({
  cuisineOptions = ['Italian', 'Indian', 'Chinese', 'Mexican'],
  dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-free', 'Keto'],
  levelOptions = ['Beginner', 'Intermediate', 'Advanced'],
  timeOptions = ['< 15 min', '15–30 min', '30–60 min', '> 60 min'],
  onApply,
  onReset,
}) => {
  const [cuisine, setCuisine] = useState('');
  const [dietary, setDietary] = useState('');
  const [level, setLevel] = useState('');
  const [time, setTime] = useState('');

  const handleApply = () => {
    const filters = { cuisine, dietary, level, time };
    onApply?.(filters);
  };

  const handleReset = () => {
    setCuisine('');
    setDietary('');
    setLevel('');
    setTime('');
    onReset?.();
  };

  return (
    <section className="smart-filter">
      <p className="smart-filter-title">
        Filter recipes by dietary needs, cooking time, and difficulty — anytime while browsing.
      </p>

      <div className="smart-filter-row">
        {/* Cuisine */}
        <div className="filter-field">
          <label className="filter-label">Cuisine</label>
          <div className="filter-control">
            <span className="filter-icon">▤</span>
            <select
              className="filter-select"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="">Cuisine</option>
              {cuisineOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span className="filter-chevron">▾</span>
          </div>
        </div>

        {/* Dietary Options */}
        <div className="filter-field">
          <label className="filter-label">Dietary Options</label>
          <div className="filter-control">
            <span className="filter-icon">▤</span>
            <select
              className="filter-select"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
            >
              <option value="">Dietary options</option>
              {dietaryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span className="filter-chevron">▾</span>
          </div>
        </div>

        {/* Cooking level */}
        <div className="filter-field">
          <label className="filter-label">Cooking level</label>
          <div className="filter-control">
            <span className="filter-icon">▤</span>
            <select
              className="filter-select"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="">Level</option>
              {levelOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span className="filter-chevron">▾</span>
          </div>
        </div>

        {/* Time */}
        <div className="filter-field">
          <label className="filter-label">Time</label>
          <div className="filter-control">
            <span className="filter-icon">▤</span>
            <select
              className="filter-select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Time</option>
              {timeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span className="filter-chevron">▾</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="filter-buttons">
          <button className="btn btn-primary" onClick={handleApply}>
            Apply
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

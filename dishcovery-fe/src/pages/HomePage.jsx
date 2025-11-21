// src/pages/HomePage.jsx
import React from 'react';
import { SmartFilter } from '../components/filters/SmartFilter';

export const HomePage = ({
  filters,
  onApplyFilters,
  onResetFilters,
  onStartHere,
}) => {
  return (
    <div className="home-page">
      {/* Hero section */}
      <section className="home-hero">
        <h1 className="home-title">Welcome to Dishcovery</h1>
        <p className="home-subtitle">
          Discover delicious recipes, personalized meal ideas, and cooking inspiration — all in one place.
        </p>

        <button className="home-start-button" onClick={onStartHere}>
          Start here
        </button>
      </section>

      {/* Filters */}
      <section id="smart-filter-section" className="home-filters">
        <SmartFilter
          onApply={onApplyFilters}
          onReset={onResetFilters}
          // optionally pass custom option arrays here
        />
      </section>

      {/* Ingredient checkbox card (placeholder content based on your Figma) */}
      <section className="home-ingredient-card">
        <div className="ingredient-grid">
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Chicken</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Steak</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Carrots</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Onions</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Tomatoes</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Broccoli</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Potatoes</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Rice</span>
          </label>

          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Shrimp</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Fish (Fresh Water)</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Fish (Salt Water)</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Clams</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Crab</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Lobster</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Fruit</span>
          </label>
          <label className="ingredient-item">
            <input type="checkbox" />
            <span>Red Peppers</span>
          </label>
        </div>
      </section>
    </div>
  );
};

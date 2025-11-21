// src/pages/SearchPage.jsx
import React from 'react';
import { SmartFilter } from '../components/filters/SmartFilter';
import { RecipeSearchBar } from '../components/search/RecipeSearchBar';
import { RecipeCard } from '../components/recipes/RecipeCard';
import { Loader } from '../components/common/Loader'; // you already have this

export const SearchPage = ({
  onApplyFilters,
  onResetFilters,
  onSearch,
  recipes,
  loading,
}) => {
  return (
    <div className="search-page">
      {/* Filters */}
      <section className="search-filters">
        <SmartFilter
          onApply={onApplyFilters}
          onReset={onResetFilters}
        />
      </section>

      {/* Search bar */}
      <section className="search-bar-section">
        <RecipeSearchBar onSearch={onSearch} />
      </section>

      {/* Results */}
      <section className="search-results">
        {loading && <Loader />}

        {!loading && recipes.length === 0 && (
          <p className="search-empty-text">
            Use the filters or search bar to explore recipes.
          </p>
        )}

        {!loading && recipes.length > 0 && (
          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <RecipeCard
                id={recipe.id}
                title={recipe.title}
                calories={recipe.calories}
                imageUrl={recipe.imageUrl}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

// src/containers/SearchContainer.jsx
import React, { useState } from 'react';
import { SearchPage } from '../pages/SearchPage';

// Temporary mock data – replace imageUrl with your local assets later
const MOCK_RECIPES = [
  {
    id: 'moroccan-lentil',
    title: 'Moroccan Lentil Stew with Butternut Squash',
    calories: 270,
    imageUrl:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    cuisine: 'Middle Eastern',
    dietary: ['Vegetarian'],
    level: 'Intermediate',
    time: '30–60 min',
  },
  {
    id: 'sweet-potato-hash',
    title: 'Sweet Potato Hash with Eggs',
    calories: 285,
    imageUrl:
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80',
    cuisine: 'American',
    dietary: ['Vegetarian'],
    level: 'Beginner',
    time: '15–30 min',
  },
  {
    id: 'honey-spice-pears',
    title: 'Honey and Spice Pears',
    calories: 165,
    imageUrl:
      'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=600&q=80',
    cuisine: 'French',
    dietary: ['Vegetarian'],
    level: 'Beginner',
    time: '< 15 min',
  },
  {
    id: 'chicken-black-bean-tostadas',
    title: 'Chicken and Black Bean Tostadas',
    calories: 303,
    imageUrl:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cuisine: 'Mexican',
    dietary: ['Non-vegetarian'],
    level: 'Intermediate',
    time: '30–60 min',
  },
];

export const SearchContainer = () => {
  const [filters, setFilters] = useState({
    cuisine: '',
    dietary: '',
    level: '',
    time: '',
  });
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]); // what we render
  const [loading, setLoading] = useState(false);

  const applyAllFilters = (allRecipes, activeFilters, activeQuery) => {
    let list = [...allRecipes];

    // text search (title contains query)
    if (activeQuery.trim()) {
      const q = activeQuery.toLowerCase();
      list = list.filter((r) => r.title.toLowerCase().includes(q));
    }

    // cuisine filter
    if (activeFilters.cuisine) {
      list = list.filter(
        (r) => r.cuisine === activeFilters.cuisine
      );
    }

    // dietary filter
    if (activeFilters.dietary) {
      list = list.filter((r) =>
        r.dietary.includes(activeFilters.dietary)
      );
    }

    // level filter
    if (activeFilters.level) {
      list = list.filter((r) => r.level === activeFilters.level);
    }

    // time filter
    if (activeFilters.time) {
      list = list.filter((r) => r.time === activeFilters.time);
    }

    return list;
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    setLoading(true);
    const filtered = applyAllFilters(MOCK_RECIPES, newFilters, query);
    setRecipes(filtered);
    setLoading(false);
  };

  const handleResetFilters = () => {
    const base = { cuisine: '', dietary: '', level: '', time: '' };
    setFilters(base);
    setLoading(true);
    const filtered = applyAllFilters(MOCK_RECIPES, base, query);
    setRecipes(filtered);
    setLoading(false);
  };

  const handleSearch = (q) => {
    setQuery(q);
    setLoading(true);
    const filtered = applyAllFilters(MOCK_RECIPES, filters, q);
    setRecipes(filtered);
    setLoading(false);
  };

  return (
    <SearchPage
      onApplyFilters={handleApplyFilters}
      onResetFilters={handleResetFilters}
      onSearch={handleSearch}
      recipes={recipes}
      loading={loading}
    />
  );
};

// src/containers/HomeContainer.jsx
import React, { useState } from 'react';
import { HomePage } from '../pages/HomePage';
import { useNavigate } from 'react-router-dom';

export const HomeContainer = () => {
  const [filters, setFilters] = useState({
    cuisine: '',
    dietary: '',
    level: '',
    time: '',
  });

  const navigate = useNavigate();            


  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    console.log('Apply filters:', newFilters);
    // TODO: call recipes API with these filters
    // e.g. getRecipes(newFilters)
  };

  const handleResetFilters = () => {
    setFilters({
      cuisine: '',
      dietary: '',
      level: '',
      time: '',
    });
    console.log('Reset filters');
    // TODO: reset recipes list
  };

  const handleStartHere = () => {
    navigate('/search');
  };


  return (
    <HomePage
      filters={filters}
      onApplyFilters={handleApplyFilters}
      onResetFilters={handleResetFilters}
      onStartHere={handleStartHere}
    />
  );
};

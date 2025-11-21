// src/App.jsx
import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
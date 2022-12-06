import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Calculators from './pages/Calculator';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} replace />
      <Route path="/home" element={<Home />} />
      <Route path="/calculator" element={<Calculators />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;

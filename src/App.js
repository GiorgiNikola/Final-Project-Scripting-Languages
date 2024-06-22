// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import ContactForm from './components/ContactForm';
import Auth from './components/Auth';
import PoolServices from './components/PoolServices';
import FitnessServices from './components/FitnessServices';
import ComplexServices from './components/ComplexServices';
import ServiceDetails from './components/ServiceDetails';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pool-services" element={<PoolServices />} />
          <Route path="/fitness-services" element={<FitnessServices />} />
          <Route path="/complex-services" element={<ComplexServices />} />
          <Route path="/services/:category/:id" element={<ServiceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

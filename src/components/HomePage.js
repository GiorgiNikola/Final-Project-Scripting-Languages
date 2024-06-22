import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to the Service Sales Platform</h1>
    <div className="service-categories">
      <Link to="/pool-services">
        <h2>Pool Services</h2>
      </Link>
      <Link to="/fitness-services">
        <h2>Fitness Services</h2>
      </Link>
      <Link to="/complex-services">
        <h2>Complex Services</h2>
      </Link>
    </div>
  </div>
);

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/pool-services">Pool Services</Link></li>
      <li><Link to="/fitness-services">Fitness Services</Link></li>
      <li><Link to="/complex-services">Complex Services</Link></li>
    </ul>
  </nav>
);

export default NavigationBar;

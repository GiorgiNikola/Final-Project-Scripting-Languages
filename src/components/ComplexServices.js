// src/components/ComplexServices.js

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import Pagination from './Pagination';
import { complexServices } from '../servicesData';

const ComplexServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const servicesPerPage = 2;

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const filteredServices = complexServices.filter(service => {
    return (
      service.price >= priceRange[0] &&
      service.price <= priceRange[1] &&
      (location === '' || service.location === location) &&
      service.rating >= rating &&
      (searchTerm === '' || service.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);

  // Unique locations array
  const allLocations = Array.from(new Set(complexServices.map(service => service.location)));

  return (
    <div>
      <h1>Complex Services</h1>
      <div className="filters">
        <div>
          <label>Price Range:</label>
          <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])} />
          -
          <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], +e.target.value])} />
        </div>
        <div>
          <label>Location:</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">All Locations</option>
            {allLocations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" value={rating} onChange={(e) => setRating(+e.target.value)} />
        </div>
        <div>
          <label>Search:</label>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
      <div className="services-container">
        {currentServices.map(service => (
          <ServiceCard key={service.id} service={service} category="complex" />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredServices.length / servicesPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ComplexServices;

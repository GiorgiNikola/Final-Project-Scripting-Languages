import React from 'react';

const Filter = () => {
  const handleFilterChange = () => {
    // Handle filter logic here
  };

  return (
    <div>
      <h3>Filter Services</h3>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="pool">Pool</option>
        <option value="fitness">Fitness</option>
      </select>
    </div>
  );
};

export default Filter;

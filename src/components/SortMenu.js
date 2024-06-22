import React from 'react';

const SortMenu = () => {
  const handleSortChange = () => {
    // Handle sort logic here
  };

  return (
    <div>
      <h3>Sort by Price</h3>
      <select onChange={handleSortChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortMenu;

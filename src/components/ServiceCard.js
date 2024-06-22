// src/components/ServiceCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, category }) => (
  <div className="service-card">
    <Link to={`/services/${category}/${service.id}`}>
      <img src={service.photo} alt={service.name} className="service-photo" />
      <h2>{service.name}</h2>
      <p>Company: {service.company}</p>
      <p>Price: ${service.price}</p>
      <p>Rating: {service.rating}</p>
      <p>Location: {service.location}</p>
      <p>{service.description}</p>
    </Link>
  </div>
);

export default ServiceCard;

// src/components/ServiceDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { poolServices, fitnessServices, complexServices } from '../servicesData';

const ServiceDetails = () => {
  const { id, category } = useParams();

  const services = {
    pool: poolServices,
    fitness: fitnessServices,
    complex: complexServices
  };

  const service = services[category].find(service => service.id === parseInt(id));

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        `Service Name: ${service.name}\nCompany: ${service.company}\nPrice: $${service.price}\nRating: ${service.rating}\nLocation: ${service.location}\nDescription: ${service.description}`
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = `${service.name}_Report.txt`;
    document.body.appendChild(element);
    element.click();
  };

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-details">
      <h1>{service.name}</h1>
      <img src={service.photo} alt={service.name} className="service-photo" />
      <p><strong>Company:</strong> {service.company}</p>
      <p><strong>Price:</strong> ${service.price}</p>
      <p><strong>Rating:</strong> {service.rating}</p>
      <p><strong>Location:</strong> {service.location}</p>
      <p><strong>Description:</strong> {service.description}</p>
      <button onClick={handleDownload}>Download Report</button>
    </div>
  );
};

export default ServiceDetails;

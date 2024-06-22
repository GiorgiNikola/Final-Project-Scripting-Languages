// src/servicesData.js

import pool1 from './photos/pool1.jpg';
import pool2 from './photos/pool2.jpg';
import pool3 from './photos/pool3.jpg';
import pool4 from './photos/pool4.jpg';
import pool5 from './photos/pool5.jpg';
import fitness1 from './photos/fitness1.jpg';
import fitness2 from './photos/fitness2.jpg';
import fitness3 from './photos/fitness3.jpg';
import fitness4 from './photos/fitness4.jpg';
import fitness5 from './photos/fitness5.jpg';
import complex1 from './photos/complex1.jpg';
import complex2 from './photos/complex2.jpg';
import complex3 from './photos/complex3.jpg';
import complex4 from './photos/complex4.jpg';
import complex5 from './photos/complex5.jpg';

export const poolServices = [
  {
    id: 1,
    name: 'Pool Cleaning',
    company: 'Aqua Cleaners',
    price: 100,
    location: 'New York',
    rating: 4.5,
    description: 'Professional pool cleaning service.',
    photo: pool1,
  },
  {
    id: 2,
    name: 'Pool Maintenance',
    company: 'Pool Masters',
    price: 150,
    location: 'Los Angeles',
    rating: 4.7,
    description: 'Regular pool maintenance and upkeep.',
    photo: pool2,
  },
  {
    id: 3,
    name: 'Pool Repair',
    company: 'Pool Fixers',
    price: 200,
    location: 'Chicago',
    rating: 4.9,
    description: 'Expert pool repair services.',
    photo: pool3,
  },
  {
    id: 4,
    name: 'Pool Renovation',
    company: 'Pool Rejuvenators',
    price: 5000,
    location: 'Miami',
    rating: 4.6,
    description: 'Complete pool renovation and remodeling.',
    photo: pool4,
  },
  {
    id: 5,
    name: 'Pool Supplies',
    company: 'Pool Products Plus',
    price: 50,
    location: 'Dallas',
    rating: 4.3,
    description: 'Wide selection of pool supplies and accessories.',
    photo: pool5,
  },
];

export const fitnessServices = [
  {
    id: 1,
    name: 'Personal Training',
    company: 'Fit Life',
    price: 50,
    location: 'Los Angeles',
    rating: 4.8,
    description: 'One-on-one personal training sessions.',
    photo: fitness1,
  },
  {
    id: 2,
    name: 'Group Fitness Classes',
    company: 'Fitness Fusion',
    price: 25,
    location: 'New York',
    rating: 4.6,
    description: 'Variety of group fitness classes for all levels.',
    photo: fitness2,
  },
  {
    id: 3,
    name: 'Yoga and Pilates',
    company: 'Mind Body Studio',
    price: 30,
    location: 'Chicago',
    rating: 4.9,
    description: 'Yoga and Pilates classes for flexibility and strength.',
    photo: fitness3,
  },
  {
    id: 4,
    name: 'Nutrition Coaching',
    company: 'Healthy Habits',
    price: 100,
    location: 'Miami',
    rating: 4.7,
    description: 'Personalized nutrition plans and coaching.',
    photo: fitness4,
  },
  {
    id: 5,
    name: 'Massage Therapy',
    company: 'Relax and Revive',
    price: 80,
    location: 'Dallas',
    rating: 4.5,
    description: 'Therapeutic massage services for relaxation and pain relief.',
    photo: fitness5,
  },
];

export const complexServices = [
  {
    id: 1,
    name: 'Event Management',
    company: 'Event Experts',
    price: 200,
    location: 'Chicago',
    rating: 4.7,
    description: 'Comprehensive event management services.',
    photo: complex1,
  },
  {
    id: 2,
    name: 'Sports Leagues',
    company: 'City Sports',
    price: 150,
    location: 'Los Angeles',
    rating: 4.5,
    description: 'Join our sports leagues for all ages and skill levels.',
    photo: complex2,
  },
  {
    id: 3,
    name: 'Facility Rental',
    company: 'Venue Plus',
    price: 500,
    location: 'New York',
    rating: 4.8,
    description: 'Rent our state-of-the-art sports facilities.',
    photo: complex3,
  },
  {
    id: 4,
    name: 'Youth Programs',
    company: 'Kids Active',
    price: 100,
    location: 'Miami',
    rating: 4.6,
    description: 'Engaging and fun youth sports programs.',
    photo: complex4,
  },
  {
    id: 5,
    name: 'Summer Camps',
    company: 'Camp Champions',
    price: 300,
    location: 'Dallas',
    rating: 4.9,
    description: 'Action-packed summer camps for kids and teens.',
    photo: complex5,
  },
];


const allServices = [...poolServices, ...fitnessServices, ...complexServices];

// Extract unique locations
const allLocations = Array.from(new Set(allServices.map(service => service.location)));

// Function to filter services based on keyword match
const filterServicesByKeyword = (services, keyword) => {
  const lowerCaseKeyword = keyword.toLowerCase().trim();
  return services.filter(service =>
    service.name.toLowerCase().includes(lowerCaseKeyword) ||
    service.location.toLowerCase().includes(lowerCaseKeyword)
  );
};

export { allLocations, filterServicesByKeyword };
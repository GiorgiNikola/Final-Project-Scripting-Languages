import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ContactForm;

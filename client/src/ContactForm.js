import React, { useState } from 'react';
//import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // In ContactForm.js or Home.js
  const API_URL = 'https://sarthakboralkarportfolio.vercel.app/api/contact';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // If you're not using the response, you can omit the variable
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      ></textarea>
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default ContactForm;
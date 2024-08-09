import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Project1 from './Project1';
import ContactForm from './ContactForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-1" element={<Project1 />} />
      </Routes>
    </Router>
  );
}

export default App;
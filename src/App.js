import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import './App.css';

function App() {
  const [mode, setMode] = useState('dark'); // Default to dark mode

  // Use useEffect to load the mode from localStorage on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('mode') || 'dark'; // Default is dark if nothing is saved
    setMode(savedMode);
    document.body.classList.remove('light-mode', 'greenish-dark-mode', 'bluish-dark-mode');
    document.body.classList.add(`${savedMode}-mode`);
  }, []);

  function toggleMode(newMode) {
    setMode(newMode);
    localStorage.setItem('mode', newMode); // Save selected mode to localStorage
    document.body.classList.remove('dark-mode', 'greenish-dark-mode', 'bluish-dark-mode');
    document.body.classList.add(`${newMode}-mode`);
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} className="navbar-custom" />
      <div className="container">
        <Textform title="Enter text here" mode={mode} className="neon-text" />
      </div>
    </>
  );
}

export default App;

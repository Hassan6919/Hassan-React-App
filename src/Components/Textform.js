import React, { useState } from 'react';

export default function Textform({ title, mode, alert }) {
  const [text, setText] = useState('Enter text here');

  const handleChange = (e) => setText(e.target.value);

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    
  };

  const handleSpeak = () => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const textSummary = `${text.split(/\s+/).filter(Boolean).length} words and ${text.length} characters`;

  return (
    <>
      <div className="container" style={{ color: mode.includes('dark') ? 'white' : 'black' }}>
        <h1 className='neon-text'>{title}</h1>
        <textarea 
          className="form-control textarea" 
          value={text} 
          onChange={handleChange} 
          rows="8" 
          style={{ backgroundColor: mode === 'bluish-dark' || mode === 'greenish-dark' || mode === 'dark' ? '#000000' : '', color: mode.includes('dark') ? 'white' : 'black' }}>
        </textarea>
        <button className="btn btn-primary mx-2 neon-button" onClick={handleUpperCase}>Uppercase</button>
        <button className="btn btn-primary mx-2 neon-button" onClick={handleLowerCase}>Lowercase</button>
        <button className="btn btn-primary mx-2 neon-button" onClick={handleSpeak}>Speak</button>
      </div>
      <div className="container my-3" style={{ color: mode.includes('dark') ? 'white' : 'black' }}>
        <h2>Text Summary</h2>
        <p>{textSummary}</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

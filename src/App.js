import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  // Initialize a state variable 'color' to store a random color
  const [color, setColor] = useState(randomColor);
  const ranCol = randomColor();

  const containerStyle = {
    backgroundColor: ranCol,
    fontSize: '50px',
    padding: '24px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0.2)',
    color: 'white',
  };

  const buttonStyle = {
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '20px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  const generateRandomColor = () => {
    setColor(randomColor());
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React Color Generator</h1>
      <div style={containerStyle}>Generated Color: {color}</div>
      <button style={buttonStyle} onClick={() => setColor(randomColor)}>
        Generate
      </button>
    </>
  );
}

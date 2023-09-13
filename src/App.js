import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  // Initialize a state variable 'color' to store a random color
  const [color, setColor] = useState(randomColor);
  const ranCol = randomColor();

  return (
    <>
      <h1>Random Color Generator</h1>

      <div
        style={{
          backgroundColor: ranCol, // Set the background color
          fontSize: '50px',
          padding: '24px',
        }}
      >
        Generated Color: {color}
      </div>
      <button onClick={() => setColor(randomColor())}>Generate</button>
    </>
  );
}

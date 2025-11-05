'use client';

import { useState } from 'react';

export default function Form() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setResult(`You entered: ${inputValue}`);
    } else {
      setResult('Please enter a value!');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Form</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter something..."
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ccc',
            borderRadius: '5px',
            marginRight: '10px',
            width: '300px',
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </div>
      {result && (
        <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          {result}
        </div>
      )}
    </div>
  );
}

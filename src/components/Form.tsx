'use client';

import { useState } from 'react';

export default function Form() {
  const [result, setResult] = useState('Aqui vai a resposta');

  const handleSubmit = () => {
    // TODO
  };

  return (
    <div className="component-container">
      <h2 className="component-heading">Form</h2>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter something..."
          className="form-input"
        />
        <button
          onClick={handleSubmit}
          className="form-submit-button"
        >
          Submit
        </button>
      </div>
      {result && (
        <div className="form-result">
          {result}
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      fontSize: '24px', 
      fontWeight: 'bold',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Timer</h2>
      <div>Counter: {counter}</div>
    </div>
  );
}

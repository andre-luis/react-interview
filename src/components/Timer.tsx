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
    <div className="component-container">
      <h2 className="component-heading">Timer</h2>
      <div className="timer-display">Counter: {counter}</div>
    </div>
  );
}

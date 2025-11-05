'use client';

import { useState } from 'react';
import Timer from '@/components/Timer';
import Buttons from '@/components/Buttons';
import Form from '@/components/Form';

type MenuItem = 'timer' | 'buttons' | 'form';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<MenuItem>('timer');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'timer':
        return <Timer />;
      case 'buttons':
        return <Buttons />;
      case 'form':
        return <Form />;
      default:
        return <Timer />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Menu */}
      <nav style={{
        backgroundColor: '#1f2937',
        padding: '20px',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
      }}>
        <button
          onClick={() => setActiveComponent('timer')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: activeComponent === 'timer' ? '#3b82f6' : '#4b5563',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: activeComponent === 'timer' ? 'bold' : 'normal',
          }}
        >
          Timer
        </button>
        <button
          onClick={() => setActiveComponent('buttons')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: activeComponent === 'buttons' ? '#3b82f6' : '#4b5563',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: activeComponent === 'buttons' ? 'bold' : 'normal',
          }}
        >
          Buttons
        </button>
        <button
          onClick={() => setActiveComponent('form')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: activeComponent === 'form' ? '#3b82f6' : '#4b5563',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: activeComponent === 'form' ? 'bold' : 'normal',
          }}
        >
          Form
        </button>
      </nav>

      {/* Content Area */}
      <main style={{
        flex: 1,
        padding: '40px',
        backgroundColor: '#f3f4f6',
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          minHeight: '300px',
        }}>
          {renderComponent()}
        </div>
      </main>
    </div>
  );
}

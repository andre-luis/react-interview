'use client';

import { useState } from 'react';
import Timer from '@/components/Timer';
import Buttons from '@/components/Buttons';
import Form from '@/components/Form';
import MainContent from '@/components/MainContent';
import { MainProvider } from '@/contexts/MainContext';

type MenuItem = 'timer' | 'buttons' | 'form';

function HomeContent() {
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
    <div className="page-container">
      {/* Menu */}
      <nav className="nav">
        <button
          onClick={() => setActiveComponent('timer')}
          className={`nav-button ${activeComponent === 'timer' ? 'active' : ''}`}
        >
          Timer
        </button>
        <button
          onClick={() => setActiveComponent('buttons')}
          className={`nav-button ${activeComponent === 'buttons' ? 'active' : ''}`}
        >
          Buttons
        </button>
        <button
          onClick={() => setActiveComponent('form')}
          className={`nav-button ${activeComponent === 'form' ? 'active' : ''}`}
        >
          Form
        </button>
      </nav>

      {/* Content Area */}
      <MainContent>
        {renderComponent()}
      </MainContent>
    </div>
  );
}

export default function Home() {
  return (
    <MainProvider>
      <HomeContent />
    </MainProvider>
  );
}

'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MainContextType {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const MainContext = createContext<MainContextType | undefined>(undefined);

export function MainProvider({ children }: { children: ReactNode }) {
  const [backgroundColor, setBackgroundColor] = useState('#f3f4f6');

  return (
    <MainContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </MainContext.Provider>
  );
}

export function useMain() {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error('useMain must be used within a MainProvider');
  }
  return context;
}

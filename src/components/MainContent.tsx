'use client';

import { ReactNode } from 'react';
import { useMain } from '@/contexts/MainContext';

interface MainContentProps {
  children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  const { backgroundColor } = useMain();

  return (
    <main className="main-content" style={{ backgroundColor }}>
      <div className="content-box">
        {children}
      </div>
    </main>
  );
}

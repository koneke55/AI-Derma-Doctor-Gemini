
import React from 'react';
import { StethoscopeIcon } from './IconComponents';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-brand-blue-light rounded-full">
             <StethoscopeIcon className="w-6 h-6 text-brand-blue" />
          </div>
          <h1 className="text-2xl font-bold text-brand-text">AI Derma Doctor</h1>
        </div>
      </div>
    </header>
  );
};

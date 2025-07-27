import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-end items-center p-4 space-x-4 text-sm">
      <a href="#" className="text-gray-600 hover:underline">Gmail</a>
      <a href="#" className="text-gray-600 hover:underline">Bilder</a>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24">
          <path fill="currentColor" d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
        </svg>
      </button>
      <button className="px-6 py-2 bg-[#1a73e8] text-white rounded hover:bg-[#1557b0] font-medium">
        Anmelden
      </button>
    </nav>
  );
};

export default Navigation;
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[584px]">
        <div className="search-bar flex items-center">
          <svg className="w-5 h-5 text-gray-500 mr-3" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="text"
            className="flex-grow bg-transparent outline-none"
            aria-label="Suche"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M12 15c1.66 0 3-1.31 3-2.97V5.01C15 3.35 13.66 2 12 2S9 3.35 9 5.01v7.02C9 13.69 10.34 15 12 15z" />
              <path fill="#34a853" d="M11 18.08h2V22h-2z" />
              <path fill="#fbbc05" d="M7.05 16.87C5.78 15.54 5 14.04 5 12h2c0 1.45.56 2.42 1.47 3.38v.32l-1.15 1.18z" />
              <path fill="#ea4335" d="M12 16.93a4.97 5.97 0 0 1-3.54-1.55l-1.41 1.49C8.46 18.29 10.13 19 12 19c1.87 0 3.54-.71 4.96-2.13l-1.42-1.49c-.91.98-2.06 1.55-3.54 1.55z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
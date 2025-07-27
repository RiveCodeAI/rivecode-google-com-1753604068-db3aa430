import React from 'react';

const SearchButtons: React.FC = () => {
  return (
    <div className="flex justify-center mt-6 space-x-3">
      <button className="search-button border">
        Google Suche
      </button>
      <button className="search-button border">
        Auf gut Glück!
      </button>
    </div>
  );
};

export default SearchButtons;
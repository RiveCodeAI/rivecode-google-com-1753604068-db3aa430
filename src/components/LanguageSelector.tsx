import React from 'react';

const LanguageSelector: React.FC = () => {
  return (
    <div className="text-center mt-8 text-sm">
      <span className="text-gray-600">Google gibt es auch auf: </span>
      <a href="#" className="text-blue-600 hover:underline ml-1">English</a>
    </div>
  );
};

export default LanguageSelector;
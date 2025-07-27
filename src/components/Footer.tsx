import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-[#f2f2f2] text-sm">
      <div className="flex justify-center py-3 border-b border-gray-300">
        <div className="text-gray-600">© 2025 - </div>
        <a href="#" className="text-gray-600 hover:underline mx-1">Datenschutzerklärung</a>
        <div className="text-gray-600 mx-1">-</div>
        <a href="#" className="text-gray-600 hover:underline">Nutzungsbedingungen</a>
      </div>
      <div className="flex justify-center space-x-6 py-3">
        <a href="#" className="text-gray-600 hover:underline">Werbeprogramme</a>
        <a href="#" className="text-gray-600 hover:underline">Unternehmensangebote</a>
        <a href="#" className="text-gray-600 hover:underline">Über Google</a>
        <a href="#" className="text-gray-600 hover:underline">Google.de</a>
      </div>
    </footer>
  );
};

export default Footer;
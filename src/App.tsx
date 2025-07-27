import React from 'react';
import Navigation from './components/Navigation';
import GoogleLogo from './components/GoogleLogo';
import SearchBar from './components/SearchBar';
import SearchButtons from './components/SearchButtons';
import LanguageSelector from './components/LanguageSelector';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex flex-col items-center justify-center pb-40">
        <GoogleLogo />
        <SearchBar />
        <SearchButtons />
        <LanguageSelector />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EmailAnalyzer from './components/EmailAnalyzer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <EmailAnalyzer />
    </div>
  );
}

export default App;

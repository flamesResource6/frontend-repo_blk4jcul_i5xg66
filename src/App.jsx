import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Discography from './components/Discography';
import Tour from './components/Tour';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-inter">
      <Navigation />
      <Hero />
      <Discography />
      <Tour />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

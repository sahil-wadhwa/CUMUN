import React from 'react';
import Hero from './components/Hero';
import ImageStack from './components/ImageStack';
import Registration from './components/Registration';
import About from './components/About';
import VantaBackground from './components/VantaBackground';

const App = () => {
  return (
      <div className="font-sans bg-gray-50">
        <Hero/>
        <VantaBackground/>
        <ImageStack/>
        <Registration/>
        hello
      </div>
  );
};

export default App;
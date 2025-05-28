import React from 'react';
import Hero from './components/Hero';
import ImageStack from './components/ImageStack';
import Registration from './components/Registration';
import Schedule from './components/Schedule';
import VantaBackground from './components/VantaBackground';

const App = () => {
  return (
      <div className="font-sans bg-gray-50">
        <Hero/>
        <VantaBackground/>
        <ImageStack/>
        <Registration/>
        <Schedule/>
        hello
      </div>
  );
};

export default App;
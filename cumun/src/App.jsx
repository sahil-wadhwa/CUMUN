import React from 'react';
import Hero from './components/Hero';
import ImageStack from './components/ImageStack';
import Registration from './components/Registration';

const App = () => {
  return (
      <div className="font-sans bg-gray-50">
        <Hero/>
        <ImageStack/>
        <Registration/>
        <Schedule/>
        hello
      </div>
  );
};

export default App;
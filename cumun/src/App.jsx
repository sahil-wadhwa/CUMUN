import React from 'react';
import Hero from './components/Hero';
import ImageStack from './components/ImageStack';

const App = () => {
  return (
      <div className="font-sans bg-gray-50">
        <Hero/>
        <ImageStack/>
      </div>
  );
};

export default App;
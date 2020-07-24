import React from 'react';

//styling
import './Line.css';

// components
import Years from './Years';


const Line = () => {
  return (
    <div className="Line">

      <Years/>

    <div className="ticker-container">
      <div className="point-left arrow end"> </div>
      <div className="ticker"> </div>
      <div className="point-right arrow"></div>
    </div>
    </div>
  );
}

export default Line;

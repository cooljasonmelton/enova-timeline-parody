import React from 'react';
import './Timeline.css';

// components
import Timeline from './Timeline';
import CardContainer from './CardContainer';

const TimelineContainer = () => {
  return (
    <div className="TimelineContainer">
      <Timeline/>
      <CardContainer/>

 
    </div>
  );
}

export default TimelineContainer;

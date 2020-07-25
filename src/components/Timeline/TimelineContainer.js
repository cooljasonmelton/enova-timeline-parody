import React, {useState} from 'react';

//styling
import './Timeline.css';

// components
import Timeline from './Timeline';
import CardContainer from './Card/CardContainer';

const TimelineContainer = () => {
  const [year, setYear] = useState('2020')
  
  return (
    <div className="TimelineContainer">
      <Timeline setYear={setYear} year={year}/>
      <CardContainer year={year}/>

 
    </div>
  );
}

export default TimelineContainer;

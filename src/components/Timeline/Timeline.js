import React from 'react';

//styling
import './Timeline.css';

//components
import Line from './Line/Line';

const Timeline = props => {
  return (
    <div className="Timeline">
      <h2>Timeline</h2>
      <Line className="line-comp" setYear={props.setYear} year={props.year}/>
       

    </div>
  );
}

export default Timeline;

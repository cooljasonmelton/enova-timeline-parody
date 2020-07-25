import React, {useState} from 'react';

//styling
import '../Timeline.css';

// data
import CardObject from './CardObject'

//components

const CardContainer = props => {

  return (
    <div className="CardContainer">
      <div className="Card">
      <p>{CardObject[props.year]}</p>
      </div>
    </div>
  );
}

export default CardContainer;

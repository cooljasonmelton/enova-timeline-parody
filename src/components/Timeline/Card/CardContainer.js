import React, {useState, useRef} from 'react';

//styling
import '../Timeline.css';

// data
import CardObject from './CardObject'

//components

const CardContainer = props => {
  const { year } = props

  const prevYear = useRef(props.year);

  const updatePrevYear = () => {
    if (prevYear === props.year) return
    prevYear.current = props.year
  }

  const animateRender = () => {
    let numPrevYear = parseInt(prevYear.current)
    let numYear = parseInt(year)
    if (numPrevYear == numYear) return
    let tense = ""
    if (numPrevYear >= numYear) tense = "past"
    if (numPrevYear <= numYear) tense = "future"
    updatePrevYear()
    return tense
  }

  return (
    <div className="CardContainer" >
      <div className={`Card ${animateRender()}`}>
        <p>{CardObject[props.year]}</p> 
      </div>
    </div>
  );
}

export default CardContainer;

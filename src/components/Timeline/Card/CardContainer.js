import React, { useState } from 'react';

//styling
import '../Timeline.css';

// data
import CardObject from './CardObject'

const CardContainer = props => {
  const { year } = props

  const [tense, setTense] = useState('present')
  const [stateYear, setstateYear] = useState(year)

  const animateRender = () => {
    if (year === stateYear) return 
    // compare clicked year to previously clicked year
    // sets past if year is less, future if year is more
    setstateYear(year)
    let iYear = parseInt(year)
    let istateYear = parseInt(stateYear)

    if (iYear < istateYear) {
      setTense('past')
    } 
    if (iYear > istateYear) {
      setTense('future')
    } 
  }




  return (
    <div className="CardContainer" >
  
      {animateRender() /* trigger animation on render */}

      <div className={`Card ${tense}`}>
        <p>{CardObject[year]}</p> 
      </div>    
      
      <div className={`Card pseudo ${tense}`}>
        <p>{CardObject[year]}</p> 
      </div> 

    </div>
  );
}

export default CardContainer;

import React, {useState, useRef} from 'react';

//styling
import '../Timeline.css';

// data
import CardObject from './CardObject'

//components

const CardContainer = props => {
  const { year } = props

  // const prevYear = useRef(year);

  const [tense, setTense] = useState('present')
  const [sYear, setSYear] = useState(year)


  // const updatePrevYear = () => {
  //   if (prevYear === props.year) return
  //   prevYear.current = props.year
  // }

  const animateRender = () => {
    if (year === sYear) return
    let iYear = parseInt(year)
    let iSYear = parseInt(sYear)
    if (iYear < iSYear) {
      setSYear(year)
      setTense('past')
    } 
    if (iYear > iSYear) {
      setSYear(year)
      setTense('future')
    } 


  }

  return (
    <div className="CardContainer" >
      {animateRender()}
      <div className={`Card ${tense}`}>
        <p>{CardObject[props.year]}</p> 
      </div>
    </div>
  );
}

export default CardContainer;

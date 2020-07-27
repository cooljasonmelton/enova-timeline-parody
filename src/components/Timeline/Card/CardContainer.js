import React, { useState } from 'react';

//styling
import '../Timeline.css';
import './CardTrans.css';

// data
import CardObject from './CardObject'

const BCardContainer = props => {
  const { year } = props

  const setClassNames = itemYear => {
    const classArr = ['Card']
    if (year === itemYear) classArr.push('present')
    if (year > itemYear) classArr.push('past')
    if (year < itemYear) classArr.push('future')
    return classArr.join(' ')
  }

  
  return (
    <div className="CardContainer" >
      <div className={setClassNames('2020')}>
        <p>{CardObject['2020']}</p> 
      </div>
      <div className={setClassNames('2019')}>
        <p>{CardObject['2019']}</p> 
      </div>
      <div className={setClassNames('2018')}>
        <p>{CardObject['2018']}</p> 
      </div>
      <div className={setClassNames('2017')}>
        <p>{CardObject['2017']}</p> 
      </div>
      <div className={setClassNames('2016')}>
        <p>{CardObject['2016']}</p> 
      </div>
      <div className={setClassNames('2015')}>
        <p>{CardObject['2015']}</p> 
      </div>
    </div>
  );
}

export default BCardContainer;

import React from 'react';
//styling
import './Line.css';

const Years = props => {
  const { setYear, year } = props


  const activeYear = eYear => {
    if (eYear === year) return 'active'
    else return ""
  }

  return (
    <div className="Years">
      <div className="year-list">
        <div className={`year ${activeYear('2020')}`}
          onClick={e => setYear(e.target.innerText)}>
          2020
        </div>
        <div className={`year ${activeYear('2019')}`}
          onClick={e => setYear(e.target.innerText)}>
          2019
        </div>
        <div className={`year ${activeYear('2018')}`}
          onClick={e => setYear(e.target.innerText)}>
          2018
        </div>
        <div className={`year ${activeYear('2017')}`}
          onClick={e => setYear(e.target.innerText)}>
          2017
        </div>
        <div className={`year ${activeYear('2016')}`}
          onClick={e => setYear(e.target.innerText)}>
          2016
        </div>
        <div className={`year ${activeYear('2015')}`}
          onClick={e => setYear(e.target.innerText)}>
          2015
        </div>

      </div>
    </div>
  );
}

export default Years;

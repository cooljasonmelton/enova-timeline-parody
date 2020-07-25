import React, {useState} from 'react';
//styling
import './Line.css';

const Years = () => {

  const [active, setActive] = useState('2020')

  const activeYear = year => {
    if (year === active) return 'active'
    else return ""
  }




  return (
    <div className="Years">
      <div className="year-list">
        <div className={`year ${activeYear('2020')}`}
          onClick={e => setActive(e.target.innerText)}>
          2020
        </div>
        <div className={`year ${activeYear('2019')}`}
          onClick={e => setActive(e.target.innerText)}>
          2019
        </div>
        <div className={`year ${activeYear('2018')}`}
          onClick={e => setActive(e.target.innerText)}>
          2018
        </div>
        <div className={`year ${activeYear('2017')}`}
          onClick={e => setActive(e.target.innerText)}>
          2017
        </div>
        <div className={`year ${activeYear('2016')}`}
          onClick={e => setActive(e.target.innerText)}>
          2016
        </div>
        <div className={`year ${activeYear('2015')}`}
          onClick={e => setActive(e.target.innerText)}>
          2015
        </div>

      </div>
    </div>
  );
}

export default Years;

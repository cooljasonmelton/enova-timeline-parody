import React, { useState } from 'react';
import './Navbar.css';

// images
import enovaLogo from '../../images/enova-logo.svg'
import downArrow from '../../images/down-arrow.svg'

const Navbar = () => {
  const [message, setMessage] = useState(false)



  return (
    
    <>
      <div className="Navbar">
        <img className="enova-logo" src={enovaLogo} />
        <div className="nav-options">
          <div className="nav-investor">
            <div> Investor Relations </div>
              <img className="down-arrow" src={downArrow} />
          </div>
          <div className="nav-company"> Company </div>
          <div> Brands </div>
          <div> Culture </div>
          <div> Careers </div>
        </div>

        <div className="nav-message">
          For Display Only
        </div>
      </div>

    </>
  );
}

export default Navbar;

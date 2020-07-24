import React from 'react';
import './Navbar.css';

// images
import enovaLogo from '../../images/enova-logo.svg'

const Navbar = () => {


  return (
    <>
    <div className="Navbar">
      <img className="enova-logo" src={enovaLogo} />
      <div className="nav-options">
        <div> Investor Relations </div>
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

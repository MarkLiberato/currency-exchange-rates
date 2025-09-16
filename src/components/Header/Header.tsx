import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Currency Exchange Rates</h1>
      <p>View exchange rates for the last 7 days from your selected date</p>
    </div>
  );
};

export default Header;

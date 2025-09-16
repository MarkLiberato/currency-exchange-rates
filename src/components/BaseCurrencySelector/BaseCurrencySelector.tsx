import React from 'react';
import { AvailableCurrencies } from '../../types';
import { getCurrencyFlag } from '../../utils/flagUtils';
import './BaseCurrencySelector.css';

interface BaseCurrencySelectorProps {
  baseCurrency: string;
  onBaseCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  availableCurrencies: AvailableCurrencies;
}

const BaseCurrencySelector: React.FC<BaseCurrencySelectorProps> = ({
  baseCurrency,
  onBaseCurrencyChange,
  availableCurrencies
}) => {
  const flag = getCurrencyFlag(baseCurrency);
  
  return (
    <div className="control-group">
      <label htmlFor="base-currency">Base Currency:</label>
      <div className="select-wrapper">
        <span className="currency-flag" title={`Flag for ${baseCurrency}: ${flag}`}>
          {flag}
        </span>
        <select 
          id="base-currency" 
          value={baseCurrency} 
          onChange={onBaseCurrencyChange}
        >
          {Object.entries(availableCurrencies).map(([code, name]) => (
            <option key={code} value={code.toUpperCase()}>
              {code.toUpperCase()} - {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BaseCurrencySelector;

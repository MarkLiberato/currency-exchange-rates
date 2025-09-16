import React from 'react';
import { Currency, AvailableCurrencies } from '../../types';
import { getAvailableCurrencyOptions, canAddCurrency, canRemoveCurrency } from '../../utils/currencyUtils';
import Tooltip from '../Tooltip/Tooltip';
import './CurrencySelector.css';

interface CurrencySelectorProps {
  selectedCurrencies: Currency[];
  onAddCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onRemoveCurrency: (currencyCode: string) => void;
  availableCurrencies: AvailableCurrencies;
  baseCurrency: string;
  loading: boolean;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  selectedCurrencies,
  onAddCurrency,
  onRemoveCurrency,
  availableCurrencies,
  baseCurrency,
  loading
}) => {
  const availableOptions = getAvailableCurrencyOptions(availableCurrencies, baseCurrency, selectedCurrencies);
  const canAdd = canAddCurrency(selectedCurrencies);
  const canRemove = canRemoveCurrency(selectedCurrencies);

  return (
    <div className="currency-selector">
      <label>Comparison Currencies ({selectedCurrencies.length}/7):</label>
      <div className="currency-list">
        {selectedCurrencies.length === 0 ? (
          <div className="empty-state">
            <span>No currencies selected</span>
            <small>Add currencies to compare exchange rates</small>
          </div>
        ) : (
          selectedCurrencies.map(currency => (
            <Tooltip 
              key={currency.code} 
              content={`${currency.code} - ${currency.name}`}
              position="top"
            >
              <div className="currency-item selected">
                <span className="currency-code">{currency.code}</span>
                <span className="currency-name">{currency.name}</span>
                {canRemove && (
                  <button 
                    onClick={() => onRemoveCurrency(currency.code)}
                    className="remove-button"
                    aria-label={`Remove ${currency.code}`}
                    disabled={loading}
                    title="Remove this currency"
                  >
                    ×
                  </button>
                )}
              </div>
            </Tooltip>
          ))
        )}
      </div>
      
      {canAdd && (
        <div className="add-currency">
          <Tooltip content="Select a currency to add for comparison" position="top">
            <select onChange={onAddCurrency} defaultValue="" disabled={loading}>
              <option value="">{loading ? "Updating currencies..." : "Add Currency"}</option>
              {availableOptions.map(({ code, name }) => (
                <option key={code} value={code}>
                  {code} - {name}
                </option>
              ))}
            </select>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;

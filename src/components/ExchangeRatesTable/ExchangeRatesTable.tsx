import React from 'react';
import { Currency, ExchangeRates } from '../../types';
import { formatDateForDisplay } from '../../utils/dateUtils';
import { getCurrencySymbol } from '../../utils/currencySymbols';
import './ExchangeRatesTable.css';

interface ExchangeRatesTableProps {
  exchangeRates: ExchangeRates;
  selectedCurrencies: Currency[];
  baseCurrency: string;
  selectedDate: string;
  loading: boolean;
  error: string | null;
}

const ExchangeRatesTable: React.FC<ExchangeRatesTableProps> = ({
  exchangeRates,
  selectedCurrencies,
  baseCurrency,
  selectedDate,
  loading,
  error
}) => {
  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Fetching exchange rates...</p>
        <small>Please wait while we load the data</small>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const dates = Object.keys(exchangeRates).sort().reverse();
  
  if (dates.length === 0) {
    return <div className="no-data">No exchange rate data available for the selected period</div>;
  }

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Exchange Rates for {baseCurrency} (Last 7 Days from {selectedDate})</h2>
      </div>
      <table className="rates-table">
        <thead>
          <tr>
            <th>Date</th>
            {selectedCurrencies.map(currency => (
              <th key={currency.code}>
                {currency.code} - {currency.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map(date => (
            <tr key={date}>
              <td>{formatDateForDisplay(date)}</td>
                {selectedCurrencies.map(currency => (
                  <td key={currency.code}>
                    {exchangeRates[date] && exchangeRates[date][currency.code] ? (
                      <span className="rate-value" data-currency={currency.code}>
                        {exchangeRates[date][currency.code].toFixed(4)}
                      </span>
                    ) : (
                      <span style={{ color: '#999' }}>N/A</span>
                    )}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRatesTable;

import React from 'react';
import { Currency, AvailableCurrencies } from '../../types';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import DateSelector from '../DateSelector/DateSelector';
import BaseCurrencySelector from '../BaseCurrencySelector/BaseCurrencySelector';
import './Controls.css';

interface ControlsProps {
  baseCurrency: string;
  onBaseCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedDate: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCurrencies: Currency[];
  onAddCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onRemoveCurrency: (currencyCode: string) => void;
  availableCurrencies: AvailableCurrencies;
  loading: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  baseCurrency,
  onBaseCurrencyChange,
  selectedDate,
  onDateChange,
  selectedCurrencies,
  onAddCurrency,
  onRemoveCurrency,
  availableCurrencies,
  loading
}) => {
  return (
    <div className="controls">
      <BaseCurrencySelector
        baseCurrency={baseCurrency}
        onBaseCurrencyChange={onBaseCurrencyChange}
        availableCurrencies={availableCurrencies}
      />
      
      <DateSelector
        selectedDate={selectedDate}
        onDateChange={onDateChange}
      />
      
      <CurrencySelector
        selectedCurrencies={selectedCurrencies}
        onAddCurrency={onAddCurrency}
        onRemoveCurrency={onRemoveCurrency}
        availableCurrencies={availableCurrencies}
        baseCurrency={baseCurrency}
        loading={loading}
      />
    </div>
  );
};

export default Controls;

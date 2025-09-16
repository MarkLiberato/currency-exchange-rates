import React, { useState } from 'react';
import { format } from 'date-fns';
import { useCurrencies, useExchangeRates } from './hooks';
import { isDateInRange } from './utils';
import { NotificationProvider, useNotification } from './contexts/NotificationContext';
import { Header, Controls, ExchangeRatesTable } from './components';
import './App.css';

const AppContent: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState<string>('GBP');
  const [selectedDate, setSelectedDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
  const { showNotification } = useNotification();
  
  const {
    availableCurrencies,
    selectedCurrencies,
    loading: currenciesLoading,
    error: currenciesError,
    addCurrency,
    removeCurrency,
    setError
  } = useCurrencies();

  const {
    exchangeRates,
    loading: ratesLoading,
    error: ratesError
  } = useExchangeRates({
    baseCurrency,
    selectedCurrencies,
    selectedDate
  });

  const loading = currenciesLoading || ratesLoading;
  const error = currenciesError || ratesError;

  const handleBaseCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setBaseCurrency(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedDate = e.target.value;
    
    if (isDateInRange(selectedDate)) {
      setSelectedDate(selectedDate);
      showNotification('Date updated successfully', 'success');
    } else {
      showNotification('Please select a date within the last 90 days', 'error');
    }
  };

  const handleAddCurrency = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const currencyCode = e.target.value;
    if (currencyCode) {
      const currencyName = availableCurrencies[currencyCode.toLowerCase()];
      if (currencyName) {
        addCurrency(currencyCode, currencyName);
        showNotification(`${currencyCode} added successfully`, 'success');
        e.target.value = '';
      }
    }
  };

  const handleRemoveCurrency = (currencyCode: string): void => {
    removeCurrency(currencyCode);
    showNotification(`${currencyCode} removed`, 'info');
  };

  const handleRefresh = () => {
    showNotification('Refreshing data...', 'info');
    // The useExchangeRates hook will automatically refetch when dependencies change
  };

  const handleReset = () => {
    setBaseCurrency('GBP');
    setSelectedDate(format(new Date(), 'yyyy-MM-dd'));
    showNotification('Reset to defaults', 'success');
  };

  return (
    <div className="container">
      <Header />
      
      <Controls
        baseCurrency={baseCurrency}
        onBaseCurrencyChange={handleBaseCurrencyChange}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        selectedCurrencies={selectedCurrencies}
        onAddCurrency={handleAddCurrency}
        onRemoveCurrency={handleRemoveCurrency}
        availableCurrencies={availableCurrencies}
        loading={loading}
      />

      <ExchangeRatesTable
        exchangeRates={exchangeRates}
        selectedCurrencies={selectedCurrencies}
        baseCurrency={baseCurrency}
        selectedDate={selectedDate}
        loading={loading}
        error={error}
      />

    </div>
  );
};

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <AppContent />
    </NotificationProvider>
  );
};

export default App;

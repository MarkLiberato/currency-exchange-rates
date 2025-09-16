import { useState, useEffect } from 'react';
import { Currency, AvailableCurrencies } from '../types';
import { CurrencyApiService } from '../services/currencyApi';
import { DEFAULT_CURRENCIES } from '../constants';

export const useCurrencies = () => {
  const [availableCurrencies, setAvailableCurrencies] = useState<AvailableCurrencies>({});
  const [selectedCurrencies, setSelectedCurrencies] = useState<Currency[]>(DEFAULT_CURRENCIES);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailableCurrencies = async (): Promise<void> => {
      try {
        setLoading(true);
        const currencies = await CurrencyApiService.fetchAvailableCurrencies();
        setAvailableCurrencies(currencies);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load currencies');
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableCurrencies();
  }, []);

  const addCurrency = (currencyCode: string, currencyName: string): void => {
    if (!selectedCurrencies.find(c => c.code === currencyCode)) {
      setSelectedCurrencies(prev => [...prev, { code: currencyCode, name: currencyName }]);
    }
  };

  const removeCurrency = (currencyCode: string): void => {
    setSelectedCurrencies(prev => 
      prev.filter(c => c.code !== currencyCode)
    );
  };

  return {
    availableCurrencies,
    selectedCurrencies,
    loading,
    error,
    addCurrency,
    removeCurrency,
    setError
  };
};

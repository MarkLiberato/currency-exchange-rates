import { useState, useEffect, useRef } from 'react';
import { ExchangeRates, Currency } from '../types';
import { CurrencyApiService } from '../services/currencyApi';

interface UseExchangeRatesProps {
  baseCurrency: string;
  selectedCurrencies: Currency[];
  selectedDate: string;
}

export const useExchangeRates = ({ baseCurrency, selectedCurrencies, selectedDate }: UseExchangeRatesProps) => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const previousParams = useRef<{ baseCurrency: string; selectedCurrencies: Currency[]; selectedDate: string } | null>(null);

  useEffect(() => {
    if (selectedCurrencies.length === 0) {
      setExchangeRates({});
      setLoading(false);
      setError(null);
      return;
    }

    // Check if this is just adding or removing currencies to/from existing data
    const isModifyingCurrencies = previousParams.current && 
      previousParams.current.baseCurrency === baseCurrency &&
      previousParams.current.selectedDate === selectedDate &&
      previousParams.current.selectedCurrencies.length !== selectedCurrencies.length &&
      // Check if all previous currencies are still present (for removal) or if all previous currencies are present plus new ones (for addition)
      (previousParams.current.selectedCurrencies.every(prev => 
        selectedCurrencies.some(curr => curr.code === prev.code)
      ) || selectedCurrencies.every(curr => 
        previousParams.current!.selectedCurrencies.some(prev => prev.code === curr.code)
      ));

    // Only show loading spinner for initial load or when changing base currency/date
    if (!isInitialLoad && isModifyingCurrencies) {
      // Silently fetch new data without showing loading spinner
      fetchExchangeRates(false);
    } else {
      fetchExchangeRates(true);
    }

    // Update previous params for next comparison
    previousParams.current = { baseCurrency, selectedCurrencies, selectedDate };
    setIsInitialLoad(false);
  }, [baseCurrency, selectedCurrencies, selectedDate]);

  const fetchExchangeRates = async (showLoading: boolean = true): Promise<void> => {
    if (showLoading) {
      setLoading(true);
    }
    setError(null);
    
    try {
      const currencyCodes = selectedCurrencies.map(c => c.code);
      const rates = await CurrencyApiService.fetchExchangeRates(baseCurrency, currencyCodes, selectedDate);
      setExchangeRates(rates);
    } catch (err) {
      setError('Failed to fetch exchange rates');
    } finally {
      if (showLoading) {
        setLoading(false);
      }
    }
  };

  return {
    exchangeRates,
    loading,
    error,
    refetch: () => fetchExchangeRates(true)
  };
};

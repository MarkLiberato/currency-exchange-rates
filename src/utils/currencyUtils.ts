import { Currency, AvailableCurrencies } from '../types';

export const getAvailableCurrencyOptions = (
  availableCurrencies: AvailableCurrencies,
  baseCurrency: string,
  selectedCurrencies: Currency[]
): { code: string; name: string }[] => {
  return Object.entries(availableCurrencies)
    .filter(([code, name]) => 
      code.toUpperCase() !== baseCurrency && 
      !selectedCurrencies.find(c => c.code === code.toUpperCase())
    )
    .map(([code, name]) => ({
      code: code.toUpperCase(),
      name
    }));
};

export const canAddCurrency = (selectedCurrencies: Currency[]): boolean => {
  return selectedCurrencies.length < 7;
};

export const canRemoveCurrency = (selectedCurrencies: Currency[]): boolean => {
  return selectedCurrencies.length > 3;
};

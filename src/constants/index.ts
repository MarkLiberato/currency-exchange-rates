import { Currency } from '../types';

export const CURRENCY_API_BASE = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1';
export const CURRENCIES_LIST_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';

export const DEFAULT_CURRENCIES: Currency[] = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'ZAR', name: 'South African Rand' }
];

export const MAX_CURRENCIES = 7;
export const MIN_CURRENCIES = 3;
export const MAX_DAYS_BACK = 90;
export const RATES_DAYS_COUNT = 7;

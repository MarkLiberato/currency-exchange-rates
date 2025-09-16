import axios from 'axios';
import { format, subDays, parseISO } from 'date-fns';
import { AvailableCurrencies, ExchangeRates, CurrencyApiResponse } from '../types';
import { CURRENCIES_LIST_URL, RATES_DAYS_COUNT } from '../constants';

export class CurrencyApiService {
  static async fetchAvailableCurrencies(): Promise<AvailableCurrencies> {
    try {
      const response = await axios.get<AvailableCurrencies>(CURRENCIES_LIST_URL);
      return response.data;
    } catch (error) {
      throw new Error('Failed to load available currencies');
    }
  }

  static async fetchExchangeRates(
    baseCurrency: string,
    selectedCurrencies: string[],
    selectedDate: string
  ): Promise<ExchangeRates> {
    const rates: ExchangeRates = {};
    
    // Fetch rates for the last 7 days from selected date
    for (let i = 0; i < RATES_DAYS_COUNT; i++) {
      const date = format(subDays(parseISO(selectedDate), i), 'yyyy-MM-dd');
      const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${baseCurrency.toLowerCase()}.json`;
      
      try {
        const response = await axios.get<CurrencyApiResponse>(url);
        const dayRates = response.data[baseCurrency.toLowerCase()];
        
        if (dayRates) {
          rates[date] = {};
          selectedCurrencies.forEach(code => {
            if (dayRates[code.toLowerCase()]) {
              rates[date][code] = dayRates[code.toLowerCase()];
            }
          });
        }
      } catch (error) {
      }
    }
    
    return rates;
  }
}

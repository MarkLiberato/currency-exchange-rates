export interface Currency {
  code: string;
  name: string;
}

export interface ExchangeRates {
  [date: string]: {
    [currencyCode: string]: number;
  };
}

export interface AvailableCurrencies {
  [code: string]: string;
}

export interface CurrencyApiResponse {
  [key: string]: {
    [key: string]: number;
  };
}

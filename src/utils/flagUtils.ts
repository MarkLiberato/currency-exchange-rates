// Currency code to flag emoji mapping
export const CURRENCY_FLAGS: { [key: string]: string } = {
  'USD': '🇺🇸', // United States
  'EUR': '🇪🇺', // European Union
  'GBP': '🇬🇧', // United Kingdom
  'JPY': '🇯🇵', // Japan
  'CHF': '🇨🇭', // Switzerland
  'CAD': '🇨🇦', // Canada
  'AUD': '🇦🇺', // Australia
  'ZAR': '🇿🇦', // South Africa
  'CNY': '🇨🇳', // China
  'INR': '🇮🇳', // India
  'BRL': '🇧🇷', // Brazil
  'MXN': '🇲🇽', // Mexico
  'KRW': '🇰🇷', // South Korea
  'SGD': '🇸🇬', // Singapore
  'HKD': '🇭🇰', // Hong Kong
  'NZD': '🇳🇿', // New Zealand
  'NOK': '🇳🇴', // Norway
  'SEK': '🇸🇪', // Sweden
  'DKK': '🇩🇰', // Denmark
  'PLN': '🇵🇱', // Poland
  'CZK': '🇨🇿', // Czech Republic
  'HUF': '🇭🇺', // Hungary
  'RUB': '🇷🇺', // Russia
  'TRY': '🇹🇷', // Turkey
  'ILS': '🇮🇱', // Israel
  'AED': '🇦🇪', // United Arab Emirates
  'SAR': '🇸🇦', // Saudi Arabia
  'EGP': '🇪🇬', // Egypt
  'THB': '🇹🇭', // Thailand
  'MYR': '🇲🇾', // Malaysia
  'IDR': '🇮🇩', // Indonesia
  'PHP': '🇵🇭', // Philippines
  'VND': '🇻🇳', // Vietnam
};

export const getCurrencyFlag = (currencyCode: string): string => {
  return CURRENCY_FLAGS[currencyCode.toUpperCase()] || '💱'; // Default currency symbol
};

export const getDateFlag = (): string => {
  return '📅'; // Calendar icon for date selector
};

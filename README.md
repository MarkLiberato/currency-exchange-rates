# Currency Exchange Rates Application

A modern React application that allows users to view currency exchange rates for the last 7 days from a selected date, with the ability to go back up to 90 days from the current date. Built with TypeScript and modern React patterns.

## Features

- **Default Configuration**: Shows GBP compared against 7 major currencies (USD, EUR, JPY, CHF, CAD, AUD, ZAR)
- **Base Currency Selection**: Change the base currency for comparison
- **Date Selection**: Select any date up to 90 days in the past
- **Currency Management**: Add/remove comparison currencies (minimum 3, maximum 7)
- **Historical Data**: View exchange rates for the last 7 days from your selected date
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Tooltips**: Hover over currencies for additional information
- **Real-time Notifications**: User feedback for all actions
- **Modern UI**: Clean, intuitive interface with smooth animations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Select Base Currency**: Choose the currency you want to compare against others from the dropdown
2. **Pick a Date**: Select any date up to 90 days in the past using the date picker
3. **Manage Currencies**: 
   - Remove currencies by clicking the × button (minimum 3 required)
   - Add new currencies from the dropdown (maximum 7 total)
   - Hover over currencies to see full names and details
4. **View Rates**: The table shows exchange rates for the last 7 days from your selected date
5. **Refresh Data**: Use the floating action button to refresh current data
6. **Reset to Defaults**: Reset all settings to default values

## API

The application uses the free currency API from:
- Currency list: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`
- Exchange rates: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/{date}/currencies/{currency}.json`

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full type checking
- **Axios** - HTTP client for API calls
- **date-fns** - Modern date utility library
- **CSS3** - Custom styling with modern CSS features
- **Jest & React Testing Library** - Unit testing framework
- **Create React App** - Zero-configuration React setup

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner in watch mode
- `npm run test:ci` - Runs tests once with coverage report
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Controls/       # Main control panel
│   ├── CurrencySelector/ # Currency management
│   ├── ExchangeRatesTable/ # Data display table
│   ├── FloatingActionButton/ # Action buttons
│   ├── Header/         # App header
│   ├── Notification/   # Toast notifications
│   └── Tooltip/        # Interactive tooltips
├── contexts/           # React context providers
├── hooks/              # Custom React hooks
├── services/           # API service layer
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── App.tsx            # Main application component
```

## Development

This project uses modern React patterns including:
- Custom hooks for state management
- Context API for global state
- TypeScript for type safety
- Component composition
- Responsive design principles

## Testing

The project includes a comprehensive test setup with Jest and React Testing Library. Run tests with:

```bash
npm test          # Interactive mode
npm run test:ci   # CI mode with coverage
```

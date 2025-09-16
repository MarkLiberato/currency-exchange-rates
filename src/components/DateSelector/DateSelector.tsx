import React from 'react';
import { getMaxDate, getMinDate } from '../../utils/dateUtils';
import { getDateFlag } from '../../utils/flagUtils';
import './DateSelector.css';

interface DateSelectorProps {
  selectedDate: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDate,
  onDateChange
}) => {
  return (
    <div className="control-group">
      <label htmlFor="selected-date">Select Date (up to 90 days back):</label>
      <div className="input-wrapper">
        <span className="date-icon">{getDateFlag()}</span>
        <input
          id="selected-date"
          type="date"
          value={selectedDate}
          onChange={onDateChange}
          max={getMaxDate()}
          min={getMinDate()}
        />
      </div>
    </div>
  );
};

export default DateSelector;

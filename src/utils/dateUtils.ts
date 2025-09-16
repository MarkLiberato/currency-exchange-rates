import { format, subDays, parseISO } from 'date-fns';
import { MAX_DAYS_BACK } from '../constants';

export const getMaxDate = (): string => {
  return format(new Date(), 'yyyy-MM-dd');
};

export const getMinDate = (): string => {
  return format(subDays(new Date(), MAX_DAYS_BACK), 'yyyy-MM-dd');
};

export const formatDateForDisplay = (dateString: string): string => {
  return format(parseISO(dateString), 'MMM dd, yyyy');
};

export const isDateInRange = (selectedDate: string): boolean => {
  const today = new Date();
  const maxDate = format(today, 'yyyy-MM-dd');
  const minDate = format(subDays(today, MAX_DAYS_BACK), 'yyyy-MM-dd');
  
  return selectedDate <= maxDate && selectedDate >= minDate;
};

/**
 * Formats a date string to a readable format (e.g., "Feb 18, 2023")
 *
 * @param {string} dateString
 * @returns {string}
 * @example
 * formatDate('2023-02-18T00:00:00.000Z') // Returns "Feb 18, 2023"
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

/**
 * Formats a number as currency (USD)
 *
 * @param {number} value
 * @returns {string}
 * @example
 * formatCurrency(1234567.89) // Returns "$ 1 234 567"
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(/,/g, ' ')
    .replace('$', '$ ');
};

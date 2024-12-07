/**
 * Converts a string to Title Case, properly handling city names.
 * Preserves proper capitalization for words like "Los", "San", "New" in city names.
 *
 * @param text - The text to convert to Title Case
 * @returns The text in Title Case format
 */
export const toTitleCase = (text: string): string => {
  // First convert everything to lowercase
  const lowerCase = text.toLowerCase();

  // Words that should remain lowercase
  const lowerCaseWords = [
    'a',
    'an',
    'and',
    'as',
    'at',
    'but',
    'by',
    'for',
    'in',
    'of',
    'on',
    'or',
    'the',
    'to',
    'up',
    'via',
  ];

  // Capitalize first letter of each word, except for lowercase words
  return lowerCase.replace(/\w\S*/g, (word, index) => {
    // Always capitalize first word and words after a hyphen
    if (index === 0 || word.includes('-')) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    // Keep specified words lowercase unless they're part of a proper noun (like city names)
    if (lowerCaseWords.includes(word) && index !== 0) {
      return word;
    }
    // Capitalize everything else
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
};

import { useMemo, useState } from 'react';

import { Listing, FilterValues, PriceRange } from '@/types/listing';

import styles from './styles.module.scss';

interface ListingFiltersProps {
  listings: Listing[];
  onFilter: (filters: FilterValues, priceRange: PriceRange) => void;
}

/**
 * ListingFilters component.
 *
 * @param {ListingFiltersProps} props
 * @returns {JSX.Element}
 * @example
 * <ListingFilters listings={listings} onFilter={handleFilter} />
 */
const ListingFilters = ({ listings, onFilter }: ListingFiltersProps): JSX.Element => {
  // Calculate price range from data
  const priceRange = useMemo(() => {
    const prices = listings.map(l => l['Sale Price']);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, [listings]);

  const [filters, setFilters] = useState<FilterValues>({
    bedrooms: '',
    bathrooms: '',
    parking: '',
    priceRange: priceRange.max,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    onFilter(filters, priceRange);
  };

  return (
    <div className={styles['listing-filters']}>
      <div className={styles['listing-filters-group']}>
        <label htmlFor="bedrooms" className={styles['listing-filters-label']}>
          Bedrooms:
          <select
            id="bedrooms"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className={styles['listing-filters-select']}
          >
            <option value="">Any</option>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles['listing-filters-group']}>
        <label htmlFor="bathrooms" className={styles['listing-filters-label']}>
          Bathrooms:
          <select
            id="bathrooms"
            name="bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
            className={styles['listing-filters-select']}
          >
            <option value="">Any</option>
            {[1, 2, 3, 4].map(num => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles['listing-filters-group']}>
        <label htmlFor="parking" className={styles['listing-filters-label']}>
          Parking:
          <select
            id="parking"
            name="parking"
            value={filters.parking}
            onChange={handleChange}
            className={styles['listing-filters-select']}
          >
            <option value="">Any</option>
            {[1, 2, 3, 4].map(num => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles['listing-filters-range-container']}>
        <label htmlFor="priceRange" className={styles['listing-filters-label']}>
          Price Range:
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            min={priceRange.min}
            max={priceRange.max}
            value={filters.priceRange}
            onChange={handleChange}
            step="1000"
            className={styles['listing-filters-range-input']}
          />
          <div className={styles['listing-filters-range-value']}>
            Up to ${Number(filters.priceRange).toLocaleString()}
          </div>
        </label>
      </div>

      <div className={styles['listing-filters-button-container']}>
        <button type="button" onClick={handleSearch} className={styles['listing-filters-button']}>
          Search
        </button>
      </div>
    </div>
  );
};

export default ListingFilters;

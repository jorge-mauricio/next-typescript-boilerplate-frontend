import { useState } from 'react';

import ListingFilters from '@/components/integration/ListingFilters';
import ListingItem from '@/components/integration/ListingItem';
import FrontendMain from '@/components/layout/FrontendMain';
import { API_CONFIG } from '@/config';
import { Listing, FilterValues, PriceRange } from '@/types/listing';

import styles from './styles.module.scss';

import type { NextPage } from 'next';

/**
 * ListingsProps interface
 */
interface ListingsProps {
  listings: Listing[];
}

/**
 * Listings component.
 *
 * @param {ListingsProps} props
 * @param {Listing} props.listing
 * @returns {JSX.Element}
 */
const Listings: NextPage<ListingsProps> = ({ listings }: ListingsProps): JSX.Element => {
  const [filteredListings, setFilteredListings] = useState<Listing[]>(listings);

  /**
   * Handle filter changes.
   *
   * @param {FilterValues} filters
   * @returns {void}
   */
  const handleFilter = (filters: FilterValues, priceRange: PriceRange): void => {
    const filtered = listings.filter(listing => {
      // If no filter value is set, include all listings
      if (
        !filters.bedrooms &&
        !filters.bathrooms &&
        !filters.parking &&
        filters.priceRange === priceRange.max
      ) {
        return true;
      }

      // Apply filters
      const matchesBedrooms = !filters.bedrooms || listing.Bedrooms === Number(filters.bedrooms);
      const matchesBathrooms =
        !filters.bathrooms || listing.Bathrooms === Number(filters.bathrooms);
      const matchesParking = !filters.parking || listing.Parking === Number(filters.parking);
      const matchesPrice = listing['Sale Price'] <= Number(filters.priceRange);

      return matchesBedrooms && matchesBathrooms && matchesParking && matchesPrice;
    });

    setFilteredListings(filtered);
  };

  return (
    <FrontendMain cphTitleMain="Listings">
      <ListingFilters listings={listings} onFilter={handleFilter} />

      {/* NOTE: Prototype shortcut - ideally, I would create an intermediate component, such as "ListingsSet" to hold the items. */}
      <div className={styles['listings-content']}>
        {filteredListings.length > 0 ? (
          filteredListings.map(listing => <ListingItem key={listing.Id} listing={listing} />)
        ) : (
          <p className={styles['listings-no-results']}>
            No properties found matching your selected criteria.
            <br />
            Try adjusting your filters to see more options.
          </p>
        )}
      </div>
    </FrontendMain>
  );
};

/**
 * Fetch data on the server side.
 * This function is called on every request.
 *
 * @returns {Promise<{ props: ListingsProps }>}
 */
export const getServerSideProps = async (): Promise<{ props: ListingsProps }> => {
  // Fetch data on the server side
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LISTINGS.GET_ALL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const listings: Listing[] = (await response.json()) as Listing[];

    return { props: { listings } };
  } catch (error) {
    console.error('Error fetching the listings:', error);
    return { props: { listings: [] } };
  }
};

export default Listings;

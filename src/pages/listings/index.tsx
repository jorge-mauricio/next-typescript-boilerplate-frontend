import ListingItem from '@/components/integration/ListingItem';
import FrontendMain from '@/components/layout/FrontendMain';
import { API_CONFIG } from '@/config';
import { Listing, ListingsProps } from '@/types/listing';

import styles from './styles.module.scss';

import type { NextPage } from 'next';

/**
 * Listings component.
 *
 * @param {ListingsProps} props
 * @param {Listing} props.listing
 * @returns {JSX.Element}
 */
const Listings: NextPage<ListingsProps> = ({ listings }: ListingsProps): JSX.Element => {
  return (
    <FrontendMain cphTitleMain="Listings">
      <div>Filters</div>

      {/* NOTE: Prototype shortcut - ideally, I would create an intermediate component, such as "ListingsSet" to hold the items. */}
      <div className={styles['listings-content']}>
        {listings.map(listing => (
          <ListingItem key={listing.Id} listing={listing} />
        ))}
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

import ListingItem from '@/components/integration/ListingItem';
import FrontendMain from '@/components/layout/FrontendMain';
import { API_CONFIG } from '@/config';
import { Listing, ListingsProps } from '@/types/listing';

// import styles from './styles.module.scss';

import type { NextPage } from 'next';

const Listings: NextPage<ListingsProps> = ({ listings }) => {
  // Debug.
  console.log('listings=', listings); // prints in the browser
  return (
    <FrontendMain cphTitleMain="Listings">
      <div>Filters</div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
      <div className="flex flex-wrap justify-evenly gap-6">
        {listings.map(listing => (
          <ListingItem key={listing.Id} listing={listing} />
        ))}
      </div>
    </FrontendMain>
  );
};

export const getServerSideProps = async () => {
  // Fetch data on the server side
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LISTINGS.GET_ALL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const listings: Listing[] = await response.json();
    console.log('listings=', listings); // prints in the terminal
    return { props: { listings } };
  } catch (error) {
    console.error('Error fetching the listings:', error);
    return { props: { listings: [] } }; // Return empty array in case of error
  }
};

export default Listings;

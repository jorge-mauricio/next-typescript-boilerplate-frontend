import styles from './styles.module.scss';

import type { NextPage } from 'next';

interface Listing {
  id: number; // Example type, adjust based on the shape of your data
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
}

interface ListingsProps {
  listings: Listing[];
}

const Listings: NextPage<ListingsProps> = ({ listings }) => {

  return (
    console.log('listings=', listings), // prints in the browser
    <div className={styles['l-listings-container']}>
      <main className={styles['listings-content']}>
        <div className={styles['listings-content-header']}>
          <h1>Property Listings</h1>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  // Fetch data on the server side
  try {
    const response = await fetch('http://localhost:3001/listings');
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

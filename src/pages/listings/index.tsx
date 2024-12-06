import styles from './styles.module.scss';

import type { NextPage } from 'next';

const Listings: NextPage = () => {
  return (
    <div className={styles['l-listings-container']}>
      <main className={styles['listings-content']}>
        <div className={styles['listings-content-header']}>
          <h1>Property Listings</h1>
        </div>
      </main>
    </div>
  );
};

export default Listings;

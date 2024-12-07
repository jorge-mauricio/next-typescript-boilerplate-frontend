// src/pages/listings/[id].tsx
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import FrontendMain from '@/components/layout/FrontendMain';
import { API_CONFIG } from '@/config';
import { formatDate, formatCurrency } from '@/lib/helpers/formatters';
import { Listing } from '@/types/listing';

import styles from './styles.module.scss';

interface ListingDetailsProps {
  listing: Listing;
}

/**
 * Listing details component.
 *
 * @param {ListingDetailsProps} props
 * @param {Listing} props.listing
 * @returns {JSX.Element}
 */
const ListingDetails: NextPage<ListingDetailsProps> = ({
  listing,
}: ListingDetailsProps): JSX.Element => {
  const formattedDate = formatDate(listing.DateListed);
  const formattedPrice = formatCurrency(listing['Sale Price']);

  return (
    <FrontendMain cphTitleMain="Listing Details">
      <div className={styles['listing-details']}>
        {/* Main content area */}
        <div className={styles['listing-details-main']}>
          {/* Header info */}
          <div className={styles['listing-details-header']}>
            <div className={styles['listing-details-title']}>
              <h2>{listing.Title}</h2>
              <span>{formattedPrice}</span>
            </div>
            <div className={styles['listing-details-subheader']}>
              {listing.Location}
              <span>{formattedDate}</span>
            </div>
          </div>

          {/* Main image */}
          <div className={styles['listing-details-image']}>
            <Image src={listing.PictureURL} alt={listing.Title} className="object-cover" fill />
          </div>

          {/* Property features */}
          <div className={styles['listing-details-features']}>
            <div className={styles['listing-details-feature']}>
              {listing.Bedrooms}
              <span className={styles['listing-details-feature-label']}>BED</span>
            </div>
            <div className={styles['listing-details-feature']}>
              {listing.Bathrooms}
              <span className={styles['listing-details-feature-label']}>BATH</span>
            </div>
            <div className={styles['listing-details-feature']}>
              {listing.Parking}
              <span className={styles['listing-details-feature-label']}>PARKING</span>
            </div>
            <div className={styles['listing-details-feature']}>
              {listing.Sqft}
              <span className={styles['listing-details-feature-label']}>SQFT</span>
            </div>
            <div className={styles['listing-details-feature']}>
              {listing.YearBuilt}
              <span className={styles['listing-details-feature-label']}>YEAR BUILT</span>
            </div>
          </div>

          {/* Description */}
          <p className={styles['listing-details-description']}>{listing.Description}</p>
        </div>

        {/* Sidebar */}
        <div className={styles['listing-details-sidebar']}>
          <h3 className={styles['listing-details-sidebar-title']}>Contact Agent</h3>
        </div>
      </div>
      <Link href="/listings" className={styles['listing-details-back-button']}>
        Back to Listings
      </Link>
    </FrontendMain>
  );
};

export const getServerSideProps: GetServerSideProps<ListingDetailsProps> = async ({ params }) => {
  try {
    const id = params?.id;
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LISTINGS.GET_ALL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const listings = (await response.json()) as Listing[];
    // NOTE: Prototype shortcut - Ideally, it would be better to fetch a single listing by ID
    // on a dedicated endpoint.
    const listing = listings.find(l => l.Id.toString() === id);

    if (!listing) {
      return {
        notFound: true,
      };
    }

    return {
      props: { listing },
    };
  } catch (error) {
    console.error('Error fetching listing:', error);
    return {
      notFound: true,
    };
  }
};

export default ListingDetails;

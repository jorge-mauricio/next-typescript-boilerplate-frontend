import Image from 'next/image';

import { toTitleCase } from '@/lib/helpers/strings';
import { Listing } from '@/types/listing';

import styles from './styles.module.scss';

interface ListingCardProps {
  listing: Listing;
}

/**
 * Listing card component.
 *
 * @param {ListingCardProps} props
 * @param {Listing} props.listing
 * @returns {JSX.Element}
 */
const ListingItem = ({ listing }: ListingCardProps): JSX.Element => {
  // NOTE: Prototype shortcut - I could have created a helper for this.
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(listing['Sale Price'])
    .replace(/,/g, ' ')
    .replace('$', '$ ');

  return (
    <div className={styles['listing-item']}>
      <Image
        className={styles['listing-item-image']}
        height={192}
        width={230}
        src={listing.PictureURL}
        alt={listing.Title}
      />
      <h2 className={styles['listing-item-title']}>{toTitleCase(listing.Title)}</h2>
      <p className={styles['listing-item-content']}>{listing.Location}</p>
      <p className={`${styles['listing-item-content']} text-sm`}>
        {listing.Bedrooms} beds | {listing.Bathrooms} baths
      </p>
      <p className={`${styles['listing-item-content']} font-bold text-lg mb-2`}>{formattedPrice}</p>
      <button
        className="w-[calc(100%-1rem)] bg-sky-400 text-black py-2 px-4 rounded hover:bg-orange-600 transition-colors mt-auto mx-auto"
        type="button"
      >
        View Details
      </button>
    </div>
  );
};

export default ListingItem;

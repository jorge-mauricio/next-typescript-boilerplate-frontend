import Image from 'next/image';

import { Listing } from '@/types/listing';

interface ListingCardProps {
  listing: Listing;
}

/**
 * Listing card component.
 *
 * @param {Object} props - Component properties
 * @param {string} props.listing - The listing object
 * @returns {JSX.Element} The rendered ListingItem component
 */
const ListingItem = ({ listing }: ListingCardProps) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(listing.SalePrice);

  return (
    <div className="min-w-[14.375rem] max-w-[14.375rem] border border-gray-200 rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image src={listing.PictureURL} alt={listing.Title} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        {' '}
        {/* Add flex-1 to make it expand */}
        <div className="flex-1">
          {' '}
          {/* This div will push the button down */}
          <h2 className="font-semibold text-lg mb-2">{listing.Title}</h2>
          <p className="text-gray-600 mb-2">{listing.Location}</p>
          <p className="text-sm text-gray-500 mb-2">
            {listing.Bedrooms} beds | {listing.Bathrooms} baths
          </p>
          <p className="font-bold text-lg mb-4">{formattedPrice}</p>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ListingItem;

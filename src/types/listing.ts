/**
 * Listing interface
 */
export interface Listing {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  'Sale Price': number; // NOTE: Prototyping shortcut - I noticed that in the original data, the key was set as "Sale Price". I could have built the interface to match it, like 'Sale Price', but instead, I just changed the
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

/**
 *
 */
export interface ListingsProps {
  listings: Listing[];
}

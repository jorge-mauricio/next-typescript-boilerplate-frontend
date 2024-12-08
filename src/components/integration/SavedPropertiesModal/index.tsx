import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { toTitleCase } from '@/lib/helpers/strings';
import { RootState } from '@/store/store';

import styles from './styles.module.scss';

interface SavedPropertiesModalProps {
  onClose: () => void;
}

/**
 * Saved properties modal component.
 *
 * @param {SavedPropertiesModalProps} props
 * @returns {JSX.Element}
 */
const SavedPropertiesModal = ({ onClose }: SavedPropertiesModalProps): JSX.Element => {
  const savedProperties = useSelector((state: RootState) => state.savedProperties.properties);
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains(styles.overlay)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles['modal-title']}>Saved Properties</h2>

        <div className={styles['modal-content']}>
          {savedProperties.map(property => (
            <Link
              key={property.id}
              href={`/listings/${property.id}`}
              className={styles['property-item']}
              onClick={onClose}
            >
              <img
                src={property.pictureUrl}
                alt={property.title}
                className={styles['property-image']}
              />
              <span className={styles['property-title']}>{toTitleCase(property.title)}</span>
            </Link>
          ))}
        </div>

        <button type="button" onClick={onClose} className={styles['modal-close']}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SavedPropertiesModal;

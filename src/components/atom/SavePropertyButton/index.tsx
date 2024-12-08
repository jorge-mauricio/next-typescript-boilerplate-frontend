import { Heart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleProperty } from '@/store/savedPropertiesSlice';
import { RootState } from '@/store/store';

import styles from './styles.module.scss';

interface SavePropertyButtonProps {
  id: number;
  title: string;
  pictureUrl: string;
}

/**
 * Save Property Button component
 *
 * @param {SavePropertyButtonProps} props
 * @returns {JSX.Element}
 */
const SavePropertyButton = ({ id, title, pictureUrl }: SavePropertyButtonProps): JSX.Element => {
  const dispatch = useDispatch();
  const savedProperties = useSelector((state: RootState) => state.savedProperties.properties);
  const isSaved = savedProperties.some(p => p.id === id);

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleProperty({ id, title, pictureUrl }))}
      className={styles['save-property-button']}
    >
      <Heart className={styles['save-property-icon']} fill={isSaved ? 'currentColor' : 'none'} />
      Save Property
    </button>
  );
};

export default SavePropertyButton;

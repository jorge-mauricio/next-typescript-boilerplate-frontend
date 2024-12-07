// import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';
import { FrontendMainProps } from './types';

/**
 * FrontendMain component for standardized layout.
 *
 * @param {Object} props - Component properties
 * @param {string} props.cphTitleMain - The main title content for the h1 element
 * @param {React.ReactNode} props.children - The child components to be rendered within this component
 * @returns {JSX.Element} The rendered FrontendMain component
 */
const FrontendMain = ({ cphTitleMain, children }: FrontendMainProps): JSX.Element => {
  return (
    <div className={styles['l-frontend-main']}>
      <header className={styles['l-frontend-main-header']}>
        <Image
          className="mx-auto"
          src="/files/layout/frontend-layout-logo.png" // Path relative to public directory
          alt="Logo"
          width={320}
          height={65}
        />
        <nav>
          <ul className={styles['l-frontend-main-nav-list']}>
            <li className={styles['l-frontend-main-nav-item']}>
              <Link href="/" className={styles['l-frontend-main-nav-link']}>
                Home
              </Link>
            </li>
            <li className={styles['l-frontend-main-nav-item']}>
              <Link href="/listings" className={styles['l-frontend-main-nav-link']}>
                Listings
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles['l-frontend-main-content']}>
        <h1>{cphTitleMain}</h1>
        {children}
      </main>

      <footer className={styles['l-frontend-main-footer']}>
        {/* Your footer content */}
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default FrontendMain;

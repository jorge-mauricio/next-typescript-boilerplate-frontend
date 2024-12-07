import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useLayoutParentConfig } from '@/hooks/useLayoutParentConfig';

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
  // Custom hook to dynamically apply layout classes to the parent DOM elements.
  useLayoutParentConfig('full-flex-height');

  return (
    <>
      <Head>
        {/*
        NOTE: prototype shortcut - ideally, I would create a different prop for this,
        as the documents title can be different from the layout title.
        */}
        <title>
          {typeof cphTitleMain === 'string' ? `${cphTitleMain} - Real Estate` : 'Real Estate'}
        </title>
      </Head>
      <header className={styles['l-frontend-main-header']}>
        <Image
          className="mx-auto min-w-64"
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
        <div className="max-w-[64rem] m-auto">
          <h1 className={styles['l-frontend-main-content-heading']}>{cphTitleMain}</h1>
          {children}
        </div>
      </main>

      <footer className={styles['l-frontend-main-footer']}>
        Copyright © 2024 Full Stack Web Designer - JM. All rights reserved.
        <address>
          {'e-mail: '}
          <Link href="mailto:contact@fullstackwebdesigner.com" className="hover:text-orange-600">
            contact@fullstackwebdesigner.com
          </Link>
        </address>
      </footer>
    </>
  );
};

export default FrontendMain;

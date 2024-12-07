import FrontendMain from '@/components/layout/FrontendMain';

import type { NextPage } from 'next';

/**
 * Home page component
 *
 * @returns {JSX.Element}
 */
const Home: NextPage = (): JSX.Element => {
  return (
    <FrontendMain cphTitleMain="Home">
      <p>This is a basic test page to verify our setup</p>
    </FrontendMain>
  );
};

export default Home;

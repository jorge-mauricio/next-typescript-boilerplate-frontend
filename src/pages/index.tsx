import FrontendMain from '@/components/layout/FrontendMain';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <FrontendMain cphTitleMain="Home">
      <p>This is a basic test page to verify our setup</p>
    </FrontendMain>
  );
};

export default Home;

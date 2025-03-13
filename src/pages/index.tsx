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
      <p className="leading-relaxed">
        NextJS / TypeScript boiler plate.
        <br />
        <strong>Tech Stack Overview</strong>
        <br />
        I selected Next.js framework, since I have
        always valued server side rendering, and it also saves some time with the automatic routing,
        since we were in a tight deadline.
        <br />
        I also opted to use TypeScript, since it's high in demand and I've been coding with it for
        the past year.
        <br />
        For CSS styling, I used Tailwind CSS, configured with SCSS and set up as a styled module. To
        serve the provided dataset, I chose json-server for its simplicity, avoiding the complexity
        of a full setup with MSW. To streamline running both servers with a single command, I
        utilized concurrently in combination with wait-on.
        <br />
        <br />
        Visit the repository for more information:
        <br />
        <a
          href="https://git.number8.com/jorge.silva/react-frontend-assessment#readme"
          target="_blank"
          className="text-orange-700 hover:text-black"
        >
          https://git.number8.com/jorge.silva/react-frontend-assessment#readme
        </a>
      </p>
    </FrontendMain>
  );
};

export default Home;

import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/*
          NOTE: Prototype shortcut - there are tons of tags we should include in the head, especially og: tags.
          Ideally, they would be set dynamically based on the page content, in the page component.
        */}
        <meta name="description" content="Software Mind assessment task." />
        <link rel="icon" href="/favicon.ico" />
        <meta lang="en" />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
};

export default Document;

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <main className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to Next.js with TypeScript edit 3
        </h1>
        <p className="mt-3 text-xl text-gray-600">
          This is a basic test page to verify our setup
        </p>
      </main>
    </div>
  );
};

export default Home;

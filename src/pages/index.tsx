import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { NextPage } from 'next';
import PaperList from '../components/paper-list';
import Form from './../components/paper-form';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

const Home: NextPage = () => {
  return (
    <>
      <main className="mx-auto max-w-5xl">
        <QueryClientProvider client={queryClient}>
          <Form />
          <PaperList />
        </QueryClientProvider>
      </main>
    </>
  );
};

export default Home;

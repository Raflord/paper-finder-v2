import type { NextPage } from 'next';
import PaperList from '../components/paper-list';
import Form from './../components/paper-form';

const Home: NextPage = () => {
  return (
    <>
      <main className="mx-auto max-w-5xl">
        <Form />
        <PaperList />
      </main>
    </>
  );
};

export default Home;

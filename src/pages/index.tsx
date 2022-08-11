import type { NextPage } from 'next';
import PaperList from '../components/paper-list';
import Form from './../components/paper-form';

const Home: NextPage = () => {
  return (
    <>
      <Form />
      <PaperList />
    </>
  );
};

export default Home;

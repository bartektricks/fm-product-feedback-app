import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import { trpc } from '../utils/trpc';
import BoardName from '@atoms/BoardName';

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <>
      <BoardName name="Frontend Mentor" />
      <main>{hello.data?.greeting}</main>
    </>
  );
};

export default Home;

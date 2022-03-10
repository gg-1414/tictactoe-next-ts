import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Logo from '../components/Logo';
import SelectGame from '../components/SelectGame';
import NameCollectionForm from '../components/NameCollectionForm';
import useTicTacToe from '../hooks/useTicTacToe';

const Home: NextPage = () => {
  const { type, handleSelection} = useTicTacToe();

  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <meta
          name="description"
          content="Tic Tac Toe App created using Next.js & Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Logo />

        {!type ? (
          <SelectGame handleSelection={handleSelection} />
        ) : (
          <NameCollectionForm type={type} />
        )}
      </main>
    </div>
  );
};

export default Home;

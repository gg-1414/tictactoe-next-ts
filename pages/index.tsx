import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import classes from '../styles/Home.module.scss';
import Logo from '../components/Logo';
import SelectGame from '../components/SelectGame';
import NameCollectionForm from '../components/NameCollectionForm';
import Game from '../components/Game';
import useTicTacToe from '../hooks/useTicTacToe';

const Home: NextPage = () => {
  const { status, type, players, turn, board, handleSelection, handlePlayerSubmit } = useTicTacToe();

  const start = () => (
    <>
      <Logo />
      {!type ? (
        <SelectGame handleSelection={handleSelection} />
      ) : (
        <NameCollectionForm
          type={type}
          status={status}
          handlePlayerSubmit={handlePlayerSubmit}
        />
      )}
    </>
  );

  return (
    <div className={classes.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <meta
          name="description"
          content="Tic Tac Toe App created using Next.js & Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        {status === 'created' && start()}
        {(status === 'started' || status === 'finished') && (
          <Game
            players={players}
            turn={turn}
            board={board}
          />
        )}
      </main>
    </div>
  );
};

export default Home;

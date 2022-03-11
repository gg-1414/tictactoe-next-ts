/**
 * Hook to gather all the "business" logic involved in making
 * the game work as it should (and keeps components responsible
 * for only the logic in rendering the page).
 * 
 * Also great because it can be used in other projects that
 * choose to render the game in a different way.
 */

import { useState } from 'react';

interface ReturnValue {
  status: string;
  type: string | null;
  players: string[];
  turn: string;
  board: string[];
  handleSelection(selection: string): void;
  handlePlayerSubmit(players: string[]): void;
}

const useTicTacToe = (): ReturnValue => {
  const [status, setStatus] = useState('created'); // created, started, finished
  const [type, setType] = useState<string | null>(null);
  const [players, setPlayers] = useState(new Array(2).fill(''));
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(new Array(9).fill(''));

  const handleSelection = (selection: string): void => {
    setType(selection);
  }

  const handlePlayerSubmit = (names: string[]): void => {
    const newPlayers = names.length < 2 ? [...names, 'bot'] : [...names];
    setPlayers(newPlayers);
    setStatus('started');
  }

  return {
    status,
    type,
    players,
    turn,
    board,
    handleSelection,
    handlePlayerSubmit,
  };
};

export default useTicTacToe;

/**
 * Hook to gather all the "business" logic involved in making
 * the game work as it should (and keeps components responsible
 * for only the logic in rendering the page).
 * 
 * Also great because it can be used in other projects that
 * choose to render the game in a different way.
 */

import { useEffect, useMemo, useState } from 'react';

interface ReturnValue {
  status: string;
  type: string | null;
  players: string[];
  turn: string;
  board: string[];
  winnerIndex: number | null;
  handleGameSelection(selection: string): void;
  handlePlayerSubmit(players: string[]): void;
  handleClick(index: number): void;
  handleRefreshGame(): void;
}

const useTicTacToe = (): ReturnValue => {
  const [status, setStatus] = useState('created'); // created, started, finished
  const [type, setType] = useState<string | null>(null); // single, multi
  const [players, setPlayers] = useState(new Array(2).fill(''));
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(new Array(9).fill(''));
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);

  const winningCombos = useMemo(() => {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }, []);

  useEffect(() => {
    /**
     * Map through winningCombos & for each, check the index of board
     * to see if it's the value for all indexes in the combo array.
     * 
     * If match, break and set winner.
     * Else continue.
     *  If we make it to the end and the entire board is filled with
     *  values, then deem a tie.
     * 
     * Using useEffect instead of making this a function to be able to
     * update winnerIndex state immediately if a match is made.
     */

    /**
     * Using for..of loop to be able to utilize break.
     * 
     * Instead of forEach because with forEach, it runs every element in the array
     * and you can't break the loop. Extra unnecessary computation.
     */
    for (let combo of winningCombos) {
      const first = board[combo[0]];
      const second = board[combo[1]];
      const third = board[combo[2]];

      // If below is true, will skip the rest of the block and move onto next iteration
      if (!first && !second && !third) continue;

      if (first === second && second === third) {
        setWinnerIndex(turn === 'X' ? 1 : 0);
        setStatus('finished');
        break;
      }

      if (!board.includes('')) {
        setStatus('finished');
      }
    }
  }, [board, turn, winningCombos]);

  const handleGameSelection = (selection: string): void => {
    setType(selection);
  }

  const handlePlayerSubmit = (names: string[]): void => {
    const newPlayers = names.length < 2 ? [...names, 'Bot'] : [...names];
    setPlayers(newPlayers);
    setStatus('started');
  }

  const handleClick = (index: number): void => {
    /**
     * Should update board
     * Should update current turn to the other player symbol
     * Should not be able to click on a square that is taken
     * Checks for winning combos after each play
     */

    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');
  }

  const handleRefreshGame = (): void => {
    /**
     * Clears type, players, turn, board, winnerIndex
     * Sets status to 'created', which should render start view
     */
    setType(null);
    setTurn('X');
    setBoard(new Array(9).fill(''));
    setWinnerIndex(null);
    setStatus('started');
  }

  return {
    status,
    type,
    players,
    turn,
    board,
    winnerIndex,
    handleGameSelection,
    handlePlayerSubmit,
    handleClick,
    handleRefreshGame,
  };
};

export default useTicTacToe;

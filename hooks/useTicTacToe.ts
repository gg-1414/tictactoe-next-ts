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
  type: string | null;
  players: string[];
  handleSelection(selection: string): void;
}

const useTicTacToe = (): ReturnValue => {
  const [type, setType] = useState<string | null>(null);
  const [players, setPlayers] = useState([]);

  const handleSelection = (selection: string): void => {
    setType(selection);
  }

  return { type, players, handleSelection };
}

export default useTicTacToe;

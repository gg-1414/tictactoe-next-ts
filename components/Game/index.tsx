/**
 * Purpose:
 * - Only renders if the game is in play or finished.
 * - Takes in players names, current turn, and board.
 * - Renders player card & displays whose turn it is
 * - Renders either board or winner dependent on status
 */

import PlayerCard from '../PlayerCard';
import Board from '../Board';
import Winner from '../Winner';
import classes from './index.module.scss';
import Avatar1 from '../../public/avatar1.png';
import Avatar2 from '../../public/avatar2.png';

interface Props {
  players: string[];
  turn: string; // 'X' || 'O'
  board: string[];
  winnerIndex: number | null;
  handleClick(index: number): void;
  handleRefreshGame(): void;
}

const Game = (props: Props) => {
  const { players, turn, board, winnerIndex, handleClick, handleRefreshGame } = props;

  const renderPlayers = players.map((player, index) => {
    const isPlayersTurn = !!(turn === 'X' && !index || turn === 'O' && index);
    return (
      <div key={index}>
        <PlayerCard
          index={index}
          avatar={!index ? Avatar1 : Avatar2}
          name={player}
          symbol={!index ? "X" : "O"}
          active={isPlayersTurn}
        />
        <p>{isPlayersTurn ? "Your turn" : ''}</p>
      </div>
    );
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.players}>
        {renderPlayers}
      </div>

      {winnerIndex !== null ? (
        <Winner
          avatar={!winnerIndex ? Avatar1 : Avatar2}
          name={!winnerIndex ? players[0] : players[1]}
          handleRefreshGame={handleRefreshGame}
        />
      ) : (
        <Board board={board} handleClick={handleClick} />
      )}
    </div>
  );
};

export default Game;

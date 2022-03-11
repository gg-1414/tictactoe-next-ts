/**
 * Purpose:
 * - Only renders if the game is in play or finished.
 * - Takes in players names, current turn, and board.
 * - Renders player card & displays whose turn it is
 * - Renders either board or winner dependent on status
 */

import PlayerCard from '../PlayerCard';
import classes from './index.module.scss';
import Avatar1 from '../../public/avatar1.png';
import Avatar2 from '../../public/avatar2.png';

interface Props {
  players: string[];
  turn: string; // 'X' || 'O'
  board: string[];
}

const Game = (props: Props) => {
  const { players, turn, board } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.players}>
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            index={index}
            avatar={!index ? Avatar1 : Avatar2}
            name={player}
            symbol={!index ? "X" : "O"}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;

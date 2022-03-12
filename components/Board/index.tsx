/**
 * Purpose:
 * - Renders (clickable) Squares.
 * - Takes in board as a prop.
 * - Passes the symbol to display from the hook.
 */

import Square from '../Square';
import classes from './index.module.scss';

interface Props {
  board: string[];
  handleClick(index: number): void;
}

const Board = (props: Props) => {
  const { board, handleClick } = props;

  return (
    <div className={classes.wrapper}>
      {board.map((value, index) => (
        <Square
          key={index}
          index={index}
          value={value}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Board;

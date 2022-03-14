/**
 * Purpose:
 * - Takes in value as prop and renders it.
 * - Clicking on it updates the board state in the hook.
 */

import classes from './index.module.scss';

interface Props {
  index: number;
  value: string;
  handlePlay(index: number): void;
}

const Square = (props: Props) => {
  const { index, value, handlePlay } = props;

  return (
    <button
      onClick={() => handlePlay(index)}
      className={`${value === 'X' ? "color_yellow" : "color_red"} ${classes.wrapper}`}
    >
      {value}
    </button>
  );
};

export default Square;

/**
 * Purpose:
 * - 2 choice selection: Single Player or Multiplayer
 * - Clicking on one updates state "players" by initializing the array with length one or two.
 */

import classes from './index.module.scss';

interface Props {
  handleSelection(selection: string): void;
}

const SelectGame = (props: Props) => {
  const { handleSelection } = props;

  return (
    <div className={classes.wrapper}>
      <button
        onClick={() => handleSelection('single')}
        className="background_gradient_green_blue"
      >
        SINGLE PLAYER
      </button>
      <button
        onClick={() => handleSelection('multi')}
        className="background_gradient_pink_purple"
      >
        MULTIPLAYER
      </button>
    </div>
  );
};

export default SelectGame;

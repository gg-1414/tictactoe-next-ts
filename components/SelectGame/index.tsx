/**
 * Purpose:
 * - 2 choice selection: Single Player or Multiplayer
 * - Clicking on one updates state "players" by initializing the array with length one or two.
 */

import { motion } from 'framer-motion';
import classes from './index.module.scss';

interface Props {
  handleGameSelection(selection: string): void;
}

const SelectGame = (props: Props) => {
  const { handleGameSelection } = props;

  return (
    <div className={classes.wrapper}>
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0, 0.5, 1],
        }}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <button
          onClick={() => handleGameSelection('single')}
          className="background_gradient_green_blue"
        >
          SINGLE PLAYER
        </button>
        <button
          onClick={() => handleGameSelection('multi')}
          className="background_gradient_pink_purple"
        >
          MULTIPLAYER
        </button>
      </motion.div>
    </div>
  );
};

export default SelectGame;

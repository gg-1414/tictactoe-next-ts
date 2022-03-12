/**
 * Purpose:
 * - Similar to PlayerCard, renders avatar and name.
 * - Also renders a replay button that restarts the game (& all state in the hook).
 */

import Image from 'next/image';
import classes from './index.module.scss';

interface Props {
  avatar: StaticImageData;
  name: string;
  handleRefreshGame(): void;
}

const Winner = (props: Props) => {
  const { avatar, name, handleRefreshGame } = props;

  return (
    <div className={classes.wrapper}>
      <Image src={avatar} alt="avatar" width={149} height={157} />
      <h4>{name} WINS!</h4>
      <button onClick={handleRefreshGame}>Refresh</button>
    </div>
  );
};

export default Winner;

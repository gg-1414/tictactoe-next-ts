/**
 * Purpose:
 * - Takes in props (avatar, name, symbol).
 * - Renders a card. That's it.
 */

import classes from './index.module.scss';
import Image from 'next/image';

interface Props {
  index: number;
  avatar: StaticImageData;
  name: string;
  symbol: string;
  active: boolean;
}

const ProfileCard = (props: Props) => {
  const { index, avatar, name, symbol, active } = props;

  return (
    <div className={`${classes.wrapper} ${active && classes.active}`}>
      <Image src={avatar} alt="avatar" width={87} height={92} />
      <h6>{name}</h6>
      <div
        className={`
          ${classes.symbol}
          ${!index ? 'color_yellow' : 'color_red'}
        `}
      >
        {symbol}
      </div>
    </div>
  );
};

export default ProfileCard;

/**
 * Purpose:
 * - Form to collect either one player or two players names
 * (dependent on type prop passed).
 * - Submission passes player names to state "player".
 * - Only submittable if all input fields are filled.
 */

import { useState, useMemo, FormEvent } from 'react';
import classes from './index.module.scss';

interface Props {
  type: string;
}

const NameCollectionForm = (props: Props) => {
  const { type } = props;

  const playersDefaultState = type === 'single' ? [''] : ['', ''];
  const [players, setPlayers] = useState(playersDefaultState);

  const handleInput = (e: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players];
    newPlayers[index] = e.currentTarget.value;
    setPlayers(newPlayers);
  }

  const canStart = useMemo(
    () => players.every((player) => player),
    [players]
  );

  const input = type === 'single' ? (
    <div className={classes.form_group}>
      <label>What is your name?</label>
      <input
        type="text"
        maxLength={12}
        value={players[0]}
        onInput={(e) => handleInput(e, 0)}
      />
    </div>
  ) : (
    <>
      <div className={classes.form_group}>
        <label>PLAYER 1</label>
        <input
          type="text"
          maxLength={12}
          value={players[0]}
          onInput={(e) => handleInput(e, 0)}
        />
      </div>
      <div className={classes.form_group}>
        <label>PLAYER 2</label>
        <input
          type="text"
          maxLength={12}
          value={players[1]}
          onInput={(e) => handleInput(e, 1)}
        />
      </div>
    </>
  );

  return (
    <div className={classes.wrapper}>
      <form>
        {input}
        <button
          type="submit"
          className={`background_gradient_green_blue`}
          disabled={!canStart}
        >
          START
        </button>
      </form>
    </div>
  )
}

export default NameCollectionForm;

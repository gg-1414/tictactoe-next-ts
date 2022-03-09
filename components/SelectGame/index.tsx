/**
 * Purpose:
 * - 2 choice selection: Single Player or Multiplayer
 * - Clicking on one updates state "players" by initializing the array with length one or two.
 */

interface Props {
  handleSelection(selection: string): void;
}

const SelectGame = (props: Props) => {
  const { handleSelection } = props;

  return (
    <div>
      <button onClick={() => handleSelection('single')}>SINGLE PLAYER</button>
      <button onClick={() => handleSelection('multi')}>MULTIPLAYER</button>
    </div>
  );
};

export default SelectGame;

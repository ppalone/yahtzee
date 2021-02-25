import { Component } from 'preact';
import Die from './Die';

class Dice extends Component {
  render() {
    const { dice, locked, toggleLock } = this.props;
    return (
      <div className="dice">
        {dice.map((die, idx) => (
          <Die
            die={die}
            key={idx}
            id={idx}
            isLocked={locked[idx]}
            toggleLock={toggleLock}
          />
        ))}
      </div>
    );
  }
}

export default Dice;

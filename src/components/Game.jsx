import { Component } from 'preact';
import ScoreTable from './ScoreTable';
import Dice from './Dice';
import Modal from './Modal';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      dice: Array.from({ length: 5 }).map(() => Math.ceil(Math.random() * 6)),
      locked: Array.from({ length: 5 }).fill(false),
      rollsLeft: 2,
      isModalOpen: true,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfAKind: undefined,
        fourOfAKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    };
    this.rollDice = this.rollDice.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.doScore = this.doScore.bind(this);
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  rollDice() {
    this.setState((state) => {
      return {
        dice: state.dice.map((die, idx) => {
          return state.locked[idx] ? die : Math.ceil(Math.random() * 6);
        }),
        rollsLeft: state.rollsLeft - 1,
        // When rollsLeft becomes zero, lock all of them
        locked:
          state.rollsLeft > 1
            ? state.locked
            : Array.from({ length: 5 }).fill(true),
      };
    });
  }

  toggleLock(id) {
    // console.log(id);
    this.setState((state) => {
      return {
        locked: state.locked.map((d, idx) => {
          if (idx === id) {
            return !d;
          }
          return d;
        }),
      };
    });
  }

  doScore(rule, ruleFun) {
    this.setState((state) => {
      return {
        scores: { ...state.scores, [rule]: ruleFun(this.state.dice) },
        dice: Array.from({ length: 5 }).map(() => Math.ceil(Math.random() * 6)),
        rollsLeft: 2,
        locked: Array.from({ length: 5 }).fill(false),
      };
    });
  }

  render() {
    // console.log('Scores' + this.state.scores);
    const isGameOver = Object.values(this.state.scores).every((score) => score);
    // console.log(isGameOver);
    const totalScore = Object.values(this.state.scores).reduce((sum, curr) => {
      if (curr !== undefined) {
        return sum + curr;
      }
      return sum;
    }, 0);
    return (
      <div id="game">
        {this.state.isModalOpen && <Modal closeModal={this.closeModal} />}
        <header>
          <h1>Yahtzee!</h1>
        </header>
        <ScoreTable scores={this.state.scores} doScore={this.doScore} />
        <div id="score">Score: {totalScore}</div>
        <Dice
          dice={this.state.dice}
          locked={this.state.locked}
          toggleLock={this.toggleLock}
        />
        <button
          id="roll"
          onClick={this.rollDice}
          disabled={
            this.state.rollsLeft < 1 || this.state.locked.every((die) => die)
          }
        >
          ROLL THE DICE ({this.state.rollsLeft} left!)
        </button>
      </div>
    );
  }
}

export default Game;

import { Component } from 'preact';
import Row from './Row';
import {
  calculateOnes,
  calculateTwos,
  calculateThrees,
  calculateFours,
  calculateFives,
  calculateSixes,
  calculateThreeOfAKind,
  calculateFourOfAKind,
  calculateYahtzee,
  calculateFullHouse,
  calculateSmallStraight,
  calculateLargeStraight,
  calculateChance,
} from '../utils/calculate';

export default class ScoreTable extends Component {
  render() {
    const { scores, doScore } = this.props;
    return (
      <div id="score-table">
        <section>
          <h2>UPPER</h2>
        </section>
        <table>
          <tbody>
            <Row
              name="ONES"
              score={scores.ones}
              doScore={() => doScore('ones', calculateOnes)}
            />
            <Row
              name="TWOS"
              score={scores.twos}
              doScore={() => doScore('twos', calculateTwos)}
            />
            <Row
              name="THREES"
              score={scores.threes}
              doScore={() => doScore('threes', calculateThrees)}
            />
            <Row
              name="FOURS"
              score={scores.fours}
              doScore={() => doScore('fours', calculateFours)}
            />
            <Row
              name="FIVES"
              score={scores.fives}
              doScore={() => doScore('fives', calculateFives)}
            />
            <Row
              name="SIXES"
              score={scores.sixes}
              doScore={() => doScore('sixes', calculateSixes)}
            />
          </tbody>
        </table>
        <section>
          <h2>LOWER</h2>
        </section>
        <table>
          <tbody>
            <Row
              name="THREE OF THE KIND"
              score={scores.threeOfAKind}
              doScore={() => doScore('threeOfAKind', calculateThreeOfAKind)}
            />
            <Row
              name="FOUR OF A KIND"
              score={scores.fourOfAKind}
              doScore={() => doScore('fourOfAKind', calculateFourOfAKind)}
            />
            <Row
              name="FULL HOUSE"
              score={scores.fullHouse}
              doScore={() => doScore('fullHouse', calculateFullHouse)}
            />
            <Row
              name="SMALL STRAIGHT"
              score={scores.smallStraight}
              doScore={() => doScore('smallStraight', calculateSmallStraight)}
            />
            <Row
              name="LARGE STRAIGHT"
              score={scores.largeStraight}
              doScore={() => doScore('largeStraight', calculateLargeStraight)}
            />
            <Row
              name="YAHTZEE"
              score={scores.yahtzee}
              doScore={() => doScore('yahtzee', calculateYahtzee)}
            />
            <Row
              name="CHANCE"
              score={scores.chance}
              doScore={() => doScore('chance', calculateChance)}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

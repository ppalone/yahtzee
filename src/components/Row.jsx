import { Component } from 'preact';

class Row extends Component {
  render() {
    const { name, score, doScore } = this.props;
    return (
      <tr onClick={score !== undefined ? undefined : doScore}>
        <td>{name}</td>
        <td>{score}</td>
      </tr>
    );
  }
}

export default Row;

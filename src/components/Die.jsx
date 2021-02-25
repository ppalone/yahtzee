import { Component } from 'preact';

class Die extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { toggleLock, id } = this.props;
    toggleLock(id);
  }

  render() {
    const { die, isLocked } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className={`die ${isLocked ? 'locked' : ''}`}
      >
        {die}
      </div>
    );
  }
}

export default Die;

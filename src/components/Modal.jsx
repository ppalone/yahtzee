function Modal(props) {
  function handleClick(e) {
    if (e.target.className === 'backdrop') {
      props.closeModal();
    }
  }
  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="modal">
        <h1>Instructions</h1>
        <p>
          Yahtzee is a dice game. The objective of the game is to score points
          by rolling five dice to make certain combinations. The dice can be
          rolled up to three times in a turn to try to make various scoring
          combinations and dice must remain in the box. A game consists of
          thirteen rounds. After each round the player chooses which scoring
          category is to be used for that round. Once a category has been used
          in the game, it cannot be used again. The scoring categories have
          varying point values, some of which are fixed values and others for
          which the score depends on the value of the dice.
        </p>
        <p>
          More info here{' '}
          <a href="https://en.wikipedia.org/wiki/Yahtzee">Wikipedia</a>
        </p>
      </div>
    </div>
  );
}

export default Modal;

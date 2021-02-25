import { Component } from 'preact';
import Game from './components/Game.jsx';
import './style';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Game />
      </div>
    );
  }
}

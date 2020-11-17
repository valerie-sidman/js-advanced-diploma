import themes from './themes';

export default class GameState {
  constructor(maxScore) {
    this.turnPlayer = true;
    this.isGameOver = false;
    this.level = 1;
    this.score = 0;
    this.maxScore = maxScore;
    this.positions = [];
    this.theme = themes.prairie;
  }
}

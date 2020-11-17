import GameStateService from '../GameStateService';
import GamePlay from '../GamePlay';
import GameController from '../GameController';
import GameState from '../GameState';

jest.mock('../GamePlay');
jest.mock('../GameStateService');

beforeEach(() => {
  jest.resetAllMocks();
});

test('load success', () => {
  const gc = new GameController(GamePlay, GameStateService);
  GameStateService.load = jest.fn(() => new GameState());
  GamePlay.drawUi = jest.fn();
  GamePlay.redrawPositions = jest.fn();
  gc.loadGame();
  expect(GamePlay.drawUi.mock.calls.length).toBe(1);
  expect(GamePlay.redrawPositions.mock.calls.length).toBe(1);
});

test('load error', () => {
  const gc = new GameController(GamePlay, GameStateService);
  GameStateService.load = jest.fn(() => {
    throw new Error('Invalid state');
  });
  GamePlay.showError = jest.fn();
  gc.loadGame();
  expect(GamePlay.showError.mock.calls.length).toBe(1);
});

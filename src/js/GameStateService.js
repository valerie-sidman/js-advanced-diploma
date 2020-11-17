import Character from './Character';

export default class GameStateService {
  constructor(storage) {
    this.storage = storage;
  }

  save(state) {
    this.storage.setItem('state', JSON.stringify(state));
  }

  load() {
    try {
      return JSON.parse(this.storage.getItem('state'), (key, value) => {
        if (key === 'character') {
          Object.setPrototypeOf(value, Object.create(Character.prototype));
        }
        return value;
      });
    } catch (e) {
      throw new Error('Invalid state');
    }
  }
}

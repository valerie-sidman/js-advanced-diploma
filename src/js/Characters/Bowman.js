import Character from '../Character';

export default class Bowman extends Character {
  constructor() {
    super(1, 'bowman');
    this.attack = 25;
    this.defence = 25;
    this.health = 100;
    this.distance = 2;
    this.distanceAttack = 2;
    this.isEnemy = false;
  }
}

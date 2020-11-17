import Character from '../Character';

export default class Daemon extends Character {
  constructor() {
    super(1, 'daemon');
    this.attack = 10;
    this.defence = 40;
    this.health = 100;
    this.distance = 1;
    this.distanceAttack = 4;
    this.isEnemy = true;
  }
}

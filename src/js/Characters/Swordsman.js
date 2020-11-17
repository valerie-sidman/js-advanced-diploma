import Character from '../Character';

export default class Swordsman extends Character {
  constructor() {
    super(1, 'swordsman');
    this.attack = 40;
    this.defence = 10;
    this.health = 100;
    this.distance = 4;
    this.distanceAttack = 1;
    this.isEnemy = false;
  }
}

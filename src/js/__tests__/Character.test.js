import Character from '../Character';
import Bowman from '../Characters/Bowman';

test('new Character', () => {
  try {
    const charErr = new Character(1);
    console.log(charErr);
  } catch (error) {
    expect(error.message).toBe('You cannot create an object of the Character class');
  }
});

test('new other Character', () => {
  const char = new Bowman(1);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(25);
  expect(char.defence).toBe(25);
  expect(char.health).toBe(100);
  expect(char.distance).toBe(2);
  expect(char.distanceAttack).toBe(2);
  expect(char.isEnemy).toBe(false);
  expect(char.type).toBe('bowman');
});

test('level up Character < 20', () => {
  const char = new Bowman(1);
  char.health = 10;
  char.levelUp();
  expect(char.level).toBe(2);
  expect(char.attack).toBe(43);
  expect(char.defence).toBe(43);
  expect(char.health).toBe(90);
});

test('level up Character > 20', () => {
  const char = new Bowman(1);
  char.health = 50;
  char.levelUp();
  expect(char.level).toBe(2);
  expect(char.attack).toBe(33);
  expect(char.defence).toBe(33);
  expect(char.health).toBe(100);
});

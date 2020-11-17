import { calcTileType, calcHealthLevel, getInfoTemplate } from '../utils';
import Bowman from '../Characters/Bowman';

test('top-left', () => {
  const result = calcTileType(0, 8);
  expect(result).toEqual('top-left');
});

test('top-right', () => {
  const result = calcTileType(7, 8);
  expect(result).toEqual('top-right');
});

test('top', () => {
  const result = calcTileType(4, 8);
  expect(result).toEqual('top');
});

test('bottom-left', () => {
  const result = calcTileType(6, 3);
  expect(result).toEqual('bottom-left');
});

test('bottom-right', () => {
  const result = calcTileType(8, 3);
  expect(result).toEqual('bottom-right');
});

test('bottom', () => {
  const result = calcTileType(7, 3);
  expect(result).toEqual('bottom');
});

test('left', () => {
  const result = calcTileType(10, 5);
  expect(result).toEqual('left');
});

test('right', () => {
  const result = calcTileType(14, 5);
  expect(result).toEqual('right');
});

test('center', () => {
  const result = calcTileType(12, 5);
  expect(result).toEqual('center');
});

test('critical health', () => {
  const state = calcHealthLevel(10);
  expect(state).toEqual('critical');
});

test('normal health', () => {
  const state = calcHealthLevel(20);
  expect(state).toEqual('normal');
});

test('high health', () => {
  const state = calcHealthLevel(90);
  expect(state).toEqual('high');
});

test('test template', () => {
  const char = new Bowman(1);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(25);
  expect(char.defence).toBe(25);
  expect(char.health).toBe(100);
  const info = getInfoTemplate(char);
  expect(info).toBe(`${String.fromCodePoint(0x1F396)}1 `
  + `${String.fromCodePoint(0x2694)}25 `
  + `${String.fromCodePoint(0x1F6E1)}25 `
  + `${String.fromCodePoint(0x2764)}100`);
});

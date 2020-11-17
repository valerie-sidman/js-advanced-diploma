export function getRandomInt(min, max) {
  const min0 = Math.ceil(min);
  const max0 = Math.floor(max);
  return Math.floor(Math.random() * (max0 - min0) + min0);
}

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  let index = 0;
  while (index < 7) {
    const indexType = getRandomInt(0, allowedTypes.length);
    const level = getRandomInt(1, maxLevel + 1);
    const character = new allowedTypes[indexType]();
    index += 1;
    character.level = level;
    yield character;
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const gen = characterGenerator(allowedTypes, maxLevel);
  const team = [];
  for (let i = 0; i < characterCount; i += 1) {
    team.push(gen.next().value);
  }
  return team;
}

export function calcTileType(index, boardSize) {
  if (index === 0) {
    return 'top-left';
  }
  if (index === boardSize - 1) {
    return 'top-right';
  }
  if (index > 0 && index < boardSize - 1) {
    return 'top';
  }
  if (index === boardSize * (boardSize - 1)) {
    return 'bottom-left';
  }
  if (index === (boardSize * boardSize) - 1) {
    return 'bottom-right';
  }
  if (index > boardSize * (boardSize - 1) && index < (boardSize * boardSize) - 1) {
    return 'bottom';
  }
  if (index % boardSize === 0) {
    return 'left';
  }
  if (index % boardSize === boardSize - 1) {
    return 'right';
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

export function getInfoTemplate(character) {
  return `${String.fromCodePoint(0x1F396)}${character.level} `
  + `${String.fromCodePoint(0x2694)}${character.attack} `
  + `${String.fromCodePoint(0x1F6E1)}${character.defence} `
  + `${String.fromCodePoint(0x2764)}${character.health}`;
}

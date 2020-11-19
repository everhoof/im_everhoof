// [0, 1)
export function getRandomIntInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getUserColor(id?: number) {
  const colors = [
    '#EF5350',
    '#AB47BC',
    '#7E57C2',
    '#5C6BC0',
    '#42A5F5',
    '#26A69A',
    '#66BB6A',
    '#FFA726',
    '#FF7043',
    '#8D6E63',
    '#BDBDBD',
    '#78909C',
  ];
  return id ? colors[(id - 1) % colors.length] : '#BDBDBD';
}

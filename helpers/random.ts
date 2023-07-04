export const randInt = (end: number, start: number = 0) =>
  Math.floor(Math.random() * (end - start + 1)) + start;

export const randElement = (array: []) => array[randInt(0, array.length - 1)];

export const shuffle = (array: []) => {
  let currentIndex = array.length,
    randomIndex: number;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

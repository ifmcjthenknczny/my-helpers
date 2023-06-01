export const rangeChars = (size: number = 26, startChar: string = "A") => {
  if (startChar.length !== 1) throw new Error("Enter char of length 1.");
  return [...Array(size).keys()].map((i) =>
    String.fromCharCode(startChar.charCodeAt(0) + i)
  );
};
export const capitalize = (text: string) =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
export const hasNumber = (text: string) => /\d/.test(text);
export const isValidEmail = (mail: string) =>
  !!mail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
export const isObjectEqual = (obj1: {}, obj2: {}) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
export const mapOver = (obj: {}, func: () => any) => Object.keys(obj).map(func);
export const deepCopy = <T>(object: T) => JSON.parse(JSON.stringify(object));
export const randInt = (end: number, start: number = 0) =>
  Math.floor(Math.random() * (end - start + 1)) + start;
export const range = (size: number, start: number = 0) =>
  [...Array(size).keys()].map((i) => i + start);
export const removeDuplicates = (array: []) =>
  [...array].filter((item, index) => array.indexOf(item) === index);
export const sleep = (miliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, miliseconds));
export const clearString = (text: string) => text.trim().toLowerCase();

export const filterProperties = (object: {}, properties: string[]) =>
  Object.fromEntries(
    Object.entries(object).filter(([key]) => !properties.includes(key))
  );

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

export const getSample = (array: []) => array[randInt(0, array.length - 1)];

export const getValuesOfKey = <T>(array: T[], key: keyof T) =>
  array.map((element) => element[key]);

export const limitPromiseConcurrency = async (
  promises: Promise<void>[],
  batchSize: number
) => {
  const promisesIterator = promises.entries();
  async function doStuff(iterator: IterableIterator<[number, Promise<void>]>) {
    for (let [i, handler] of iterator) await handler;
  }
  const promiseBatch = new Array(batchSize).fill(promisesIterator).map(doStuff);
  Promise.all(promiseBatch);
};

export const clearAllIntervals = () => {
  const INTERVAL_ID = setInterval(function () {}, Number.MAX_SAFE_INTEGER);
  for (let i = 1; i < +INTERVAL_ID; i++) {
    clearInterval(i);
  }
};

export const splitArrayByCondition = <T>(
  array: T[],
  condition: (item: T) => boolean
): [T[], T[]] => {
  return array.reduce(
    (result: [T[], T[]], item: T) => {
      if (condition(item)) {
        result[0].push(item); // Add item to the first subarray
      } else {
        result[1].push(item); // Add item to the second subarray
      }
      return result;
    },
    [[], []] // Initial values for the subarrays
  );
};


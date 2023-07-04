export const objectDeepEqual = (obj1: {}, obj2: {}) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export const objectMap = (obj: {}, func: () => any) =>
  Object.keys(obj).map(func);

export const objectDeepCopy = <T>(object: T) =>
  JSON.parse(JSON.stringify(object));

export const getValuesOfKey = <T>(array: T[], key: keyof T) =>
  array.map((element) => element[key]);

export const filterProperties = (object: {}, properties: string[]) =>
  Object.fromEntries(
    Object.entries(object).filter(([key]) => !properties.includes(key))
  );

export const removeProperty = <T extends object, K extends keyof T>(
  object: T,
  key: K
): Omit<T, K> => {
  const { [key]: removed, ...rest } = object;
  return rest;
};

export const omit = <T extends { [key: string]: any }, K extends keyof T>( // eslint-disable-line @typescript-eslint/no-explicit-any
  obj: T,
  keysToOmit: K[]
): Omit<T, K> =>
  Object.keys(obj).reduce((newObj, key) => {
    if (keysToOmit.includes(key as K)) {
      return newObj;
    }
    return { ...newObj, [key]: obj[key] };
  }, {} as Omit<T, K>);

export const pick = <T extends { [key: string]: any }, K extends keyof T>( // eslint-disable-line @typescript-eslint/no-explicit-any
  obj: T,
  keysToPick: K[]
): Pick<T, K> =>
  keysToPick.reduce((newObj, key) => {
    if (key in obj) {
      return { ...newObj, [key]: obj[key] };
    }
    return newObj;
  }, {} as Pick<T, K>);

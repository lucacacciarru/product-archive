export function convertArrayToObjectByKey<T extends Object>(
  list: T[],
  key: keyof T
): Record<string, T> {
  return list.reduce((acc, item) => {
    const currentKey = item[key];
    return {
      ...acc,
      [currentKey as any]: item,
    };
  }, {});
}

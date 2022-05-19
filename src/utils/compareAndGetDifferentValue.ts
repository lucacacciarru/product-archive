export function compareAndGetDifferentValue<T>(initialObj: T, changedObj: T) {
  return Object.keys(initialObj).reduce((acc, key) => {
    const currentInitialValue = initialObj[key as keyof T];
    const currentChangedValue = changedObj[key as keyof T];
    if (currentInitialValue === currentChangedValue) {
      return {
        ...acc,
      };
    }
    return {
      ...acc,
      [key]: currentChangedValue,
    };
  }, {} as T);
}

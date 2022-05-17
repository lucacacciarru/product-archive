import { convertArrayToObjectByKey } from "./convertArrayToObjectByKey";

export function formatListToState<T extends object>(list: T[], key: keyof T) {
  const byId = convertArrayToObjectByKey(list, key);
  const allIds = list.map((item) => item[key]);

  return {
    byId,
    allIds,
  } as any;
}

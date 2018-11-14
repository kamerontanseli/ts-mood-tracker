import { IAction } from "../types";

export function reducer<T>(
  initialState: T,
  cases: { [s: string]: (state: T, action: IAction) => T }
) {
  return (state: T = initialState, action: IAction): T =>
    typeof cases[action.type] === 'function'
      ? cases[action.type](state, action)
      : state;
}

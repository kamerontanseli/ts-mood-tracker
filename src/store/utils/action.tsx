import { IAction } from "../types";

export function action<T>(type: string, payload: (arg: T) => object) {
  return (arg: T): IAction => ({ type, payload: payload(arg) });
}
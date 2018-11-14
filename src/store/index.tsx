import { compose, curry, fromPairs, map, replace } from "ramda";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

export interface IModuleContext extends Function {
  keys: () => string[];
}

export const removeTsxPath = compose(
  replace("./", ""),
  replace(".tsx", "")
);

export const reducerValueAndFn = curry(
  (getReducer: IModuleContext, key: string): [string, () => object] => [
    removeTsxPath(key),
    getReducer(key).default
  ]
);

export const importAll = (r: IModuleContext) =>
  fromPairs(map(reducerValueAndFn(r), r.keys()));

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = {};

if (process.env.NODE_ENV !== "test") {
  // @ts-ignore
  reducers = importAll(require.context("./reducers", false, /\.tsx$/));
}

export default createStore(
  // @ts-ignore
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))
);

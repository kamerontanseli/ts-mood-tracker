import { IMoodHistoryState } from './reducers/moodHistory'

export interface IAction {
  type: string,
  payload: object
}

export interface IState {
  moodHistory: IMoodHistoryState
}
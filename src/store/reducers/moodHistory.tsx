import { MOOD_HISTORY_ADD_MOOD, MOOD_HISTORY_SET_NEXT_MOOD } from "../actions/moodHistory";
import { reducer } from "../utils/reducer";

export interface IMood {
  date: number;
  value: number;
}

export interface IMoodHistoryState {
  nextMoodValue: number,
  values: IMood[];
}

export const INITIAL_STATE: IMoodHistoryState = {
  nextMoodValue: 5,
  values: []
};

export default reducer<IMoodHistoryState>(INITIAL_STATE, {
  [MOOD_HISTORY_SET_NEXT_MOOD]: (
    state,
    action: { type: string, payload: { value: number } }
  ) => ({
    ...state,
    nextMoodValue: action.payload.value
  }),
  [MOOD_HISTORY_ADD_MOOD]: (
    state,
    action: { type: string; payload: { mood: IMood } }
  ) => ({
    ...state,
    values: [...state.values, action.payload.mood]
  })
});

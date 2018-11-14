import { IMood } from "../reducers/moodHistory";
import { action } from "../utils/action";

export const MOOD_HISTORY_ADD_MOOD = "MOOD_HISTORY_ADD_MOOD";
export const MOOD_HISTORY_SET_NEXT_MOOD = "MOOD_HISTORY_SET_NEXT_MOOD";

export const addMood = action<IMood>(MOOD_HISTORY_ADD_MOOD, (mood: IMood) => ({ mood }));
export const setNextMood = action<number>(MOOD_HISTORY_SET_NEXT_MOOD, (value: number) => ({ value }));

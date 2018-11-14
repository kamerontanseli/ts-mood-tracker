import { addMood, setNextMood } from "../../actions/moodHistory";
import moodHistory, { INITIAL_STATE } from '../moodHistory'

describe('MOOD_HISTORY_SET_NEXT_MOOD', () => {
  it('should add action.payload.value to state.nextMoodValue', () => {
    expect(moodHistory(undefined, setNextMood(30))).toEqual({
      ...INITIAL_STATE,
      nextMoodValue: 30
    })
  })
})

describe('MOOD_HISTORY_ADD_MOOD', () => {
  it('should add action.payload.mood to state.values', () => {
    expect(moodHistory(undefined, addMood({ date: 1, value: 1 }))).toEqual({
      ...INITIAL_STATE,
      values: [{ date: 1, value: 1 }]
    })
  })
})

describe('default', () => {
  it('should return state', () => {
    expect(moodHistory(undefined, { type: '', payload: {} })).toEqual(INITIAL_STATE)
  })
})
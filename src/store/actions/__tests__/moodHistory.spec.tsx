import { MOOD_HISTORY_ADD_MOOD, addMood, MOOD_HISTORY_SET_NEXT_MOOD, setNextMood } from '../moodHistory'

describe('setNextMood', () => {
  it('should return type MOOD_HISTORY_SET_NEXT_MOOD and payload.value', () => {
    expect(setNextMood(20)).toEqual({
      type: MOOD_HISTORY_SET_NEXT_MOOD,
      payload: { value: 20 }
    })
  })
})

describe('addModd', () => {
  it('should return a type with MOOD_HISTORY_ADD_MOOD and payload.mood', () => {
    expect(addMood({ date: 1, value: 1 })).toEqual({
      type: MOOD_HISTORY_ADD_MOOD,
      payload: { mood: { date: 1, value: 1 } }
    })
  })
})
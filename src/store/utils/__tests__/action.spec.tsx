import { action } from '../action'

describe('action', () => {
  it('should return an IAction interface that sets the payload based off the passed payload', () => {
    const example = action<object>('EXAMPLE', (item) => ({ item }))
    expect(example({ id: 123 })).toEqual({
      type: 'EXAMPLE',
      payload: { item: { id: 123 } }
    })
  })
})
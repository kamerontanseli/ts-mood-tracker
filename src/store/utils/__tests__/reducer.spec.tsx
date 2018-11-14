import { reducer } from '../reducer'

describe('reducer', () => {
  it('should return a reducer that executes cases based off the object passed in', () => {
    interface IExampleState {
      id: number
    }

    const initial = { id: 123 }

    const cases = {
      'EXAMPLE': jest.fn((state, action) => ({ id: 456 }))
    }

    const example = reducer<IExampleState>(initial, cases)

    expect(example(initial, { type: 'EXAMPLE', payload: {} })).toEqual({
      id: 456
    })

    expect(cases['EXAMPLE']).toHaveBeenCalled()

  })
})
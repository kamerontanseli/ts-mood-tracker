import * as React from "react";
import * as renderer from "react-test-renderer";
import { MoodNew, mapStateToProps, mapDispatchToProps } from "../MoodNew";

jest.mock("react-router-dom");

describe('mapStateToProps', () => {
  it('should return lastRecorded and value', () => {
    const state = {
      moodHistory: {
        values: [ {date: 1, value: 2} ],
        nextMoodValue: 5
      }
    }
    expect(mapStateToProps(state)).toEqual({
      lastRecorded: {date: 1, value: 2},
      value: 5
    })
  })
})

describe("MoodNew", () => {
  it("should render", () => {
    const output = renderer.create(
      <MoodNew
        onChange={() => void 0}
        onSubmit={() => void 0}
        value={20}
        lastRecorded={{ date: 1542226365908, value: 5 }}
      />
    );
    expect(output).toMatchSnapshot();
  });
  it('should call onChange when input is changed', () => {
    const onChange = jest.fn(value => expect(value).toBe(10))
    const output = renderer.create(
      <MoodNew
        onChange={onChange}
        onSubmit={() => void 0}
        value={20}
        lastRecorded={{ date: 1542226365908, value: 5 }}
      />
    );
    output.root.findByProps({ 'data-test': 'moodBar' }).props.onChange({ currentTarget: { value: 10 } })
    expect(onChange).toHaveBeenCalled()
  })
  it('should call onSubmit when input is changed', () => {
    const onSubmit = jest.fn(value => expect(value).toBe(20))
    const event = { preventDefault: jest.fn() }
    const output = renderer.create(
      <MoodNew
        onSubmit={onSubmit}
        onChange={() => void 0}
        value={20}
        lastRecorded={{ date: 1542226365908, value: 5 }}
      />
    );
    output.root.findByProps({ 'data-test': 'form' }).props.onSubmit(event)
    expect(onSubmit).toHaveBeenCalled()
    expect(event.preventDefault).toHaveBeenCalled()
  })
});

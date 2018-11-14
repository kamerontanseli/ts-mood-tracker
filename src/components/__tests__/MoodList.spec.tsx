import * as React from "react";
import * as renderer from "react-test-renderer";
import { MoodList, mapStateToProps, mapDispatchToProps } from "../MoodList";

jest.mock("react-router-dom");

describe('mapDispatchToProps', () => {
  it('should return an object', () => {
    expect(mapDispatchToProps(jest.fn())).toEqual({})
  })
})

describe('mapStateToProps', () => {
  it('should return the reverse of values', () => {
    const state = {
      moodHistory: {
        values: [{ date: 1, value: 1 }, { date: 2, value: 2 }, { date: 3, value: 3 }],
        nextMoodValue: 20
      }
    }
    expect(mapStateToProps(state)).toEqual({
      history: [{ date: 1, value: 1 }, { date: 2, value: 2 }, { date: 3, value: 3 }].reverse()
    })
  })
})

describe("MoodList", () => {
  it("should render", () => {
    const output = renderer.create(<MoodList history={[]} />);
    expect(output).toMatchSnapshot();
  });
  it("should render history", () => {
    const output = renderer.create(
      <MoodList
        history={[
          { date: 1542225226873, value: 20 },
          { date: 1542225226873, value: 30 }
        ]}
      />
    );
    expect(output).toMatchSnapshot();
  });
});

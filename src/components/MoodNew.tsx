import { last } from "ramda";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMood, setNextMood } from "../store/actions/moodHistory";
import { IMood } from "../store/reducers/moodHistory";
import { IAction, IState } from "../store/types";

export interface IMoodNewProps {
  lastRecorded: IMood | null;
  onChange: (value: number) => void;
  onSubmit: (value: number) => void;
  value: number;
}

export const MoodNew: React.SFC<IMoodNewProps> = ({
  lastRecorded,
  onChange,
  onSubmit,
  value
}: IMoodNewProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => (
    e.preventDefault(), onSubmit(value)
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    onChange(Number(e.currentTarget.value));
  return (
    <div>
      {!!lastRecorded && <p>Last recorded: {lastRecorded.value}</p>}
      <form data-test="form" onSubmit={handleSubmit}>
        <input
          type="range"
          onChange={handleChange}
          name="mood"
          required={true}
          min="1"
          max="10"
          data-test="moodBar"
        />
        <input type="submit" value="Save" />
      </form>
      <Link to="/">Cancel</Link>
    </div>
  );
};

export const mapStateToProps = (state: IState): object => ({
  lastRecorded: last(state.moodHistory.values),
  value: state.moodHistory.nextMoodValue
});

export const mapDispatchToProps = (
  dispatch: (action: IAction) => void
): object => ({
  onChange: (value: number) => dispatch(setNextMood(value)),
  onSubmit: (value: number) => dispatch(addMood({ date: Date.now(), value }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoodNew);

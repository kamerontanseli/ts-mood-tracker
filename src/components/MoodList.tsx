import { reverse } from "ramda";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IMood } from "../store/reducers/moodHistory";
import { IAction, IState } from "../store/types";

export interface IMoodListProps {
  history: IMood[];
}

export const MoodList: React.SFC<IMoodListProps> = ({
  history
}: IMoodListProps) => (
  <div>
    <ul>
      {history.length < 1 ? (
        <li>No Moods recorded yet <Link to="/record">Record a mood</Link></li>
      ) : (
        <li><Link to="/record">Record a mood</Link></li>
      )}
      {history.map((mood, index) => (
        <li key={index}>
          {mood.value} - {new Date(mood.date).toDateString()}
        </li>
      ))}
    </ul>
  </div>
);

export const mapStateToProps = (state: IState): object => ({
  history: reverse(state.moodHistory.values)
});

export const mapDispatchToProps = (
  dispatch: (action: IAction) => void
): object => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoodList);

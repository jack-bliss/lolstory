import { connect } from 'react-redux';
import { MatchList } from '../presenters/match-list/match-list';
import { RootState } from '../redux/root';

const mapStateToMatchListProps = (state: RootState) => ({
  matches: state.matches.matches,
});

export const LoadedMatches = connect(
  mapStateToMatchListProps,
)(MatchList);

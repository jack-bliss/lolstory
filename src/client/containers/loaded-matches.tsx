import { connect } from 'react-redux';
import { MatchList, MatchListProps } from '../presenters/match-list/match-list';
import { RootState } from '../redux/root';

const mapStateToMatchListProps = (state: RootState): MatchListProps => ({
  matches: state.matches.matches,
  summoner: state.summoner.summoner,
});

export const LoadedMatches = connect(
  mapStateToMatchListProps,
)(MatchList);

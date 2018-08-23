import { RootState } from '../../redux/root';
import { match } from 'react-router';
import { connect } from 'react-redux';
import { 
  SummonerWithMatches, 
  SummonerWithMatchesStateProps, 
  SummonerWithMatchesDispatchProps,
} from '../../presenters/summoner-with-matches/summoner-with-matches';
import { Dispatch } from 'redux';
import { fetchingSummoner, summonerFetched } from '../../redux/summoner/summoner-actions';
import { fetchingMatches, matchesFetched } from '../../redux/matches/matches-actions';

export interface MatchesPagePathParams {
  name: string;
}

interface MatchesPageProps {
  match: match<MatchesPagePathParams>;
}

const mapStateToSummonerWithMatchesProps = (state: RootState, ownProps: MatchesPageProps): SummonerWithMatchesStateProps => ({
  name: ownProps.match.params.name,
  summoner: state.summoner.summoner,
  fetching_summoner: state.summoner.loading,
  matches: state.matches.matches,
  fetching_matches: state.matches.loading,
});

const mapDispatchToSummonerWithMatchesProps = (dispatch: Dispatch): SummonerWithMatchesDispatchProps => ({
  fetch_summoner: () => {
    dispatch(fetchingSummoner());
  },
  summoner_fetched: (summoner) => {
    dispatch(summonerFetched(summoner));
  },
  fetch_matches: () => {
    dispatch(fetchingMatches());
  },
  matches_fetched: (matches) => {
    dispatch(matchesFetched(matches));
  }
});

export const MatchesPage = connect(
  mapStateToSummonerWithMatchesProps,
  mapDispatchToSummonerWithMatchesProps,
)(SummonerWithMatches);

import { connect } from 'react-redux';
import { SummonerDisplay } from '../presenters/summoner-display/summoner-display';
import { RootState } from '../redux/root';

const mapStateToSelectedSummonerProps = (state: RootState) => ({
  summoner: state.summoner.summoner,
});

export const SelectedSummoner = connect(
  mapStateToSelectedSummonerProps,
)(SummonerDisplay);

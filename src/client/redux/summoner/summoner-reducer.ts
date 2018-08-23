import { SummonerState, BaseSummonerState } from './summoner-state';
import { SummonerActions, SummonerActionType } from './summoner-actions';

export const SummonerReducer = (state: SummonerState = BaseSummonerState, action: SummonerActions): SummonerState => {
  switch (action.type) {
    case SummonerActionType.FETCHING_SUMMONER:
      return {
        ...state,
        loading: true,
      };
    case SummonerActionType.SUMMONER_FETCHED:
      return {
        summoner: action.summoner,
        loading: false,
      };
  }
  return state;
};

import { SummonerState } from './summoner/summoner-state';
import { combineReducers, createStore } from 'redux';
import { SummonerReducer } from './summoner/summoner-reducer';
import { MatchesState } from './matches/matches-state';
import { MatchesReducer } from './matches/matches-reducer';

export interface RootState {
  summoner: SummonerState;
  matches: MatchesState;
}

const RootReducer = combineReducers<RootState>({
  summoner: SummonerReducer,
  matches: MatchesReducer,
});

export const Store = createStore(RootReducer);

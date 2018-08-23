import { MatchesState, BaseMatchesState } from './matches-state';
import { MatchesActions, MatchesActionType } from './matches-actions';

export const MatchesReducer = (state: MatchesState = BaseMatchesState, action: MatchesActions): MatchesState => {
  switch (action.type) {
    case MatchesActionType.FETCHING_MATCHES:
      return {
        ...state,
        loading: true,
      };
    case MatchesActionType.MATCHES_FETCHED:
      return {
        matches: action.matches,
        loading: false,
      };
  }
  return state;
};

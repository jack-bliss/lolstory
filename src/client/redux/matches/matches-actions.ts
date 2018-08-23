import { MatchDTO } from '../../../interfaces/RiotDTOs/MatchDTO.interface';

export enum MatchesActionType {
  FETCHING_MATCHES = 'matches/FECTHING_MATCHES',
  MATCHES_FETCHED = 'matches/MATCHES_FETCHED',
}

interface FetchingMatches {
  type: MatchesActionType.FETCHING_MATCHES;
}
export const fetchingMatches = (): FetchingMatches => ({
  type: MatchesActionType.FETCHING_MATCHES,
});

interface MatchesFetched {
  type: MatchesActionType.MATCHES_FETCHED;
  matches: MatchDTO[];
}
export const matchesFetched = (matches: MatchDTO[]): MatchesFetched => ({
  matches,
  type: MatchesActionType.MATCHES_FETCHED,
});

export type MatchesActions = FetchingMatches
 | MatchesFetched;

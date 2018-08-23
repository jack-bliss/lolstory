import { MatchDTO } from '../../../interfaces/RiotDTOs/MatchDTO.interface';

export const BaseMatchesState: MatchesState = {
  matches: [],
  loading: false,
};

export interface MatchesState {
  matches: MatchDTO[];
  loading: boolean;
}

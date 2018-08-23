import { MatchReferenceDTO } from './MatchReferenceDTO.interface';

export interface MatchListDTO {
  matches: MatchReferenceDTO[];
  totalGames: number;
  startIndex: number;
  endIndex: number;
}

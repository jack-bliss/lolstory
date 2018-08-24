import { ParticipantStatsDTO } from './ParticipantStatsDTO.interface';
import { RuneDTO } from './RuneDTO.interface';
export interface ParticipantDTO {
  stats: ParticipantStatsDTO;
  participantId: number;
  spell1Id: number;
  spell2Id: number;
  championId: number;
  runes?: RuneDTO[];
}

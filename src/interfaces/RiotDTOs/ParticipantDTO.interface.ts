import { ParticipantStatsDTO } from './ParticipantStatsDTO.interface';
import { RuneDTO } from './RuneDTO.interface';
export interface ParticipantDTO {
  stats: ParticipantStatsDTO;
  participantId: number;
  runes: RuneDTO[];
}

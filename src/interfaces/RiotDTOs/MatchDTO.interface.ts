import { ParticipantIdentityDTO } from './ParticipantIdentityDTO.interface';
import { ParticipantDTO } from './ParticipantDTO.interface';
export interface MatchDTO {
  gameId: number;
  participantIdentities: ParticipantIdentityDTO[];
  gameDuration: number;
  participants: ParticipantDTO[];
}

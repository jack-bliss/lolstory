import * as React from 'react';
import { MatchDTO } from '../../../interfaces/RiotDTOs/MatchDTO.interface';
import { MatchDisplayWrapper } from './match-display-wrapper';

export interface MatchDisplayProps {
  match: MatchDTO;
}

export const MatchDisplay = ({ match }: MatchDisplayProps) => {
  return <MatchDisplayWrapper>
    {match.gameId} took {match.gameDuration} seconds.
  </MatchDisplayWrapper>; 
};

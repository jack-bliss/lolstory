import * as React from 'react';
import { MatchDTO } from '../../../interfaces/RiotDTOs/MatchDTO.interface';
import { MatchListWrapper } from './match-list-wrapper';
import { MatchDisplay } from '../match-display/match-display';

export interface MatchListProps {
  matches: MatchDTO[];
}

export const MatchList = ({ matches }: MatchListProps) => {

  return <MatchListWrapper>
    {matches.map(match => {
      return <MatchDisplay match={match} />;
    })}
  </MatchListWrapper>;

};

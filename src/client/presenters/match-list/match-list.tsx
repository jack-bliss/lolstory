import * as React from 'react';
import { MatchDTO } from '../../../interfaces/RiotDTOs/MatchDTO.interface';
import { MatchListWrapper } from './match-list-wrapper';
import { MatchDisplay } from '../match-display/match-display';
import { SummonerDTO } from '../../../interfaces/RiotDTOs/SummonerDTO.interface';

export interface MatchListProps {
  matches: MatchDTO[];
  summoner: SummonerDTO;
}

export const MatchList = ({ matches, summoner }: MatchListProps) => {

  return <MatchListWrapper>
    {matches.map(match => {
      return <MatchDisplay match={match} summoner={summoner} />;
    })}
  </MatchListWrapper>;

};

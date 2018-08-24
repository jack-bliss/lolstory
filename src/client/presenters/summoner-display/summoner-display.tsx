import * as React from 'react';
import { SummonerDTO } from '../../../interfaces/RiotDTOs/SummonerDTO.interface';
import { SummonerDisplayWrapper } from './summoner-display-wrapper';

export interface SummonerDisplayProps {
  summoner: SummonerDTO;
}

export const SummonerDisplay = ({ summoner }: SummonerDisplayProps) => {
  return <SummonerDisplayWrapper>
    { summoner.name } - Level { summoner.summonerLevel}
  </SummonerDisplayWrapper>; 
};

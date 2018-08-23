import * as React from 'react';
import { SummonerDTO } from '../../../interfaces/RiotDTOs/SummonerDTO.interface';
import { SummonerDisplayName } from './summoner-display-name';
import { SummonerDisplayWrapper } from './summoner-display-wrapper';

export interface SummonerDisplayProps {
  summoner: SummonerDTO;
}

export const SummonerDisplay = ({ summoner }: SummonerDisplayProps) => {
  return <SummonerDisplayWrapper>
    <SummonerDisplayName>{ summoner.name }</SummonerDisplayName>
  </SummonerDisplayWrapper>; 
};

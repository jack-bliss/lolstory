import { SummonerDTO } from '../../../interfaces/RiotDTOs/SummonerDTO.interface';

export enum SummonerActionType {
  FETCHING_SUMMONER = 'summoner/FECTHING_SUMMONER',
  SUMMONER_FETCHED = 'summoner/SUMMONER_FETCHED',
}

interface FetchingSummoner {
  type: SummonerActionType.FETCHING_SUMMONER;
}
export const fetchingSummoner = (): FetchingSummoner => ({
  type: SummonerActionType.FETCHING_SUMMONER,
});

interface SummonerFetched {
  type: SummonerActionType.SUMMONER_FETCHED;
  summoner: SummonerDTO;
}
export const summonerFetched = (summoner: SummonerDTO): SummonerFetched => ({
  summoner,
  type: SummonerActionType.SUMMONER_FETCHED,
});

export type SummonerActions = FetchingSummoner
 | SummonerFetched;

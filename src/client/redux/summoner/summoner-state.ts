import { SummonerDTO } from '../../../interfaces/RiotDTOs/SummonerDTO.interface';

export const BaseSummonerState: SummonerState = {
  summoner: null,
  loading: false,
};

export interface SummonerState {
  summoner: SummonerDTO;
  loading: boolean;
}

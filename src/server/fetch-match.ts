import { MatchDTO } from '../interfaces/RiotDTOs/MatchDTO.interface';
import axios, { AxiosResponse } from 'axios';
import { RiotBaseEndpoint } from './riot-base-endpoint';

const MatchEndpoint = RiotBaseEndpoint + 'match/v3/matches/';

export const FetchMatch = (matchId: number, key: string): Promise<MatchDTO> => {
  return new Promise((resolve, reject) => {
    axios
      .get(MatchEndpoint + matchId + '?api_key=' + key)
      .then((response: AxiosResponse<MatchDTO>) => {
        resolve(response.data);
      });
  });
};

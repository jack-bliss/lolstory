import { MatchListDTO } from '../interfaces/RiotDTOs/MatchListDTO.interface';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { RiotBaseEndpoint } from './riot-base-endpoint';

const MatchListEndpoint = RiotBaseEndpoint + 'match/v3/matchlists/by-account/';

export const FetchMatchList = (accountId: number, key: string): Promise<MatchListDTO> => {
  return new Promise((resolve, reject) => {
    axios
      .get(MatchListEndpoint + accountId + '?api_key=' + key)
      .then((response: AxiosResponse<MatchListDTO>) => {
        resolve(response.data);
      }, (err: AxiosError) => {
        reject({
          error: 'Couldn\'t fetch matches',
          code: err.response.status,
        });
      });
  });
};

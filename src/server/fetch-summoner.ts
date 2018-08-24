import axios, { AxiosResponse, AxiosError } from 'axios';
import { SummonerDTO } from '../interfaces/RiotDTOs/SummonerDTO.interface';
import { RiotBaseEndpoint } from './riot-base-endpoint';

const SummonerEndpoint = RiotBaseEndpoint + 'summoner/v3/summoners/by-name/';

export const FetchSummoner = (name: string, key: string): Promise<SummonerDTO> => {
  return new Promise((resolve, reject) => {
    return axios
      .get(SummonerEndpoint + name + '?api_key=' + key)
      .then((response: AxiosResponse<SummonerDTO>) => {
        resolve(response.data);
      }, (err: AxiosError) => {
        reject({
          error: 'Couldn\'t get summoner',
          code: err.response.status,
        });
      });
  });
};

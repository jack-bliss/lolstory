import * as React from 'react';
import { SummonerWithMatchesWrapper } from './summoner-with-matches-wrapper';
import { SelectedSummoner } from '../../containers/selected-summoner';
import { LoadedMatches } from '../../containers/loaded-matches';
import { Loading } from '../../shared/loading';
import { SummonerDTO } from '../../../interfaces/RiotDTOs/SummonerDTO.interface';
import { MatchDTO } from '../../../interfaces/RiotDTOs/MatchDTO.interface';
import { ErrorPrompt } from '../../shared/error-prompt';
import axios, { AxiosResponse } from 'axios';
import { MatchListDTO } from '../../../interfaces/RiotDTOs/MatchListDTO.interface';

export interface SummonerWithMatchesStateProps {
  name: string;

  summoner: SummonerDTO;
  fetching_summoner: boolean;

  matches: MatchDTO[];
  fetching_matches: boolean;
}

export interface SummonerWithMatchesDispatchProps {
  fetch_summoner: () => void;
  summoner_fetched: (summoner: SummonerDTO) => void;

  fetch_matches: () => void;
  matches_fetched: (matches: MatchDTO[]) => void;
}

export type SummonerWithMatchesProps = SummonerWithMatchesStateProps & SummonerWithMatchesDispatchProps;

export class SummonerWithMatches extends React.Component<SummonerWithMatchesProps> {

  constructor(props: SummonerWithMatchesProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch_summoner();
    axios.get('/summoner/' + this.props.name)
      .then((response: AxiosResponse<SummonerDTO>) => {
        this.props.summoner_fetched(response.data);
        this.props.fetch_matches();
        return axios.get('/matches/' + response.data.accountId);
      })
      .then((response: AxiosResponse<MatchListDTO>) => {
        const promisesFactoris = response.data.matches.map(match => {
          return () => axios.get('/match/' + match.gameId);
        });
        return Promise.all(promisesFactoris.map(f => f()));
      })
      .then((results: (AxiosResponse<MatchDTO>)[]) => {
        this.props.matches_fetched(results.map(r => r.data));
      });
  }

  render() {
    return <SummonerWithMatchesWrapper>
      { 
        this.props.fetching_summoner ? 
          <Loading>Fetching summoner {this.props.name}...</Loading> :
          this.props.summoner === null ?
            <ErrorPrompt>Couldn't find that summoner!</ErrorPrompt> :
            <SelectedSummoner />
      }
      { 
        this.props.fetching_matches ? 
          <Loading>Fetching matches...</Loading> :
          this.props.matches === null ?
            <ErrorPrompt>Couldn't fetch that summoner's matches!</ErrorPrompt> :
            <LoadedMatches />
      }
    </SummonerWithMatchesWrapper>;
  }

}

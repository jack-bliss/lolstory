import styled from 'styled-components';

export const SummonerWithMatchesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto repeat(auto-fill, auto);
  grid-template-areas: 
    "summoner"
    ".";
`;

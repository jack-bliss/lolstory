import styled from 'styled-components';

interface MatchDisplayOutcomeProps {
  win: boolean;
}

export const MatchDisplayOutcome = styled.div`
  font-size: 18px;
  grid-area: outcome;
  text-align: center;
  text-transform: uppercase;
  color: ${(props: MatchDisplayOutcomeProps) => props.win ? '#0C0' : '#C00'};
`;

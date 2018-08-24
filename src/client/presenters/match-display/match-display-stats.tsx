import styled from 'styled-components';

export const MatchDisplayStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 10px 1fr 10px 1fr 10px 1fr;
  grid-template-rows: auto;
  grid-template-areas: "level . kda . creep . cpm";
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #CCC;
`;

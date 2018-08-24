import styled from 'styled-components';

export const MatchDisplayHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 10px 50px 10px 1fr;
  grid-template-rows: auto;
  grid-template-areas: "champion . outcome . duration";
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #CCC;
  line-height: 32px;
`;

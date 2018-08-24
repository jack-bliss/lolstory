import styled from 'styled-components';

export const MatchDisplayInventory = styled.div`
  display: grid;
  grid-template-columns: 1fr 10px 2fr 10px 4fr;
  grid-template-rows: auto 10px auto;
  grid-template-areas: "spells . runes . items";
`;

import styled from 'styled-components';

export const MainPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px 1fr;
  grid-template-rows: 200px auto 1fr auto;
  grid-template-areas: 
    ". . ."
    ". input ."
    ". . ."
    "footer footer footer";
`;

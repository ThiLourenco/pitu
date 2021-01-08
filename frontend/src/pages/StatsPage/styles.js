import styled from 'styled-components';

export const StatsContainer = styled.div`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  
`;

export const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center !important;
  margin-buttom: 0.5rem;  
`;

export const StatsBox = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 2rem;
  border: solid 1px #ccc;
  border-radius: .25rem;
  text-align: center;
  margin: .5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

`;

export const StatsBoxTitle = styled.div`
  padding: 0.25rem;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  
`;
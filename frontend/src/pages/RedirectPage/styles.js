import styled from 'styled-components';

export const StatsContainer = styled.div`
  display: block;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
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
`;

export const StatsBoxTitle = styled.div`
  font-weight: 500;
  padding: 0.25rem;
  display: block;
`;
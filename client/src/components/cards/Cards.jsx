import styled from 'styled-components';
import Card from '../card/Card';

const Container = styled.div`
  border: solid green;
  border: 0;
  width: 90%;
  height: 100%;
  margin: 1rem auto;
  display: grid;
  gap: 2rem;
  grid-auto-rows: 23rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
`;

export const Cards = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

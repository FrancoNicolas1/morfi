import React from 'react';
import styled from 'styled-components';
import { Cards } from '../components/cards/Cards';
import { Footer } from '../components/footer/Footer';

const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  border: solid red;
`;

export default function Home() {
  return (
    <>
      <ContainerHome>
        <h1>Home</h1>
        <Cards />
        <Footer />
      </ContainerHome>
    </>
  );
}

import React from 'react';
import styled from 'styled-components';
import { Cards } from '../components/cards/Cards';
import { Footer } from '../components/footer/Footer';

const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  /* border: solid red; */
`;

export default function Home() {
  return (
    <>
      <ContainerHome>
        <Cards />
        <Footer />
      </ContainerHome>
    </>
  );
}

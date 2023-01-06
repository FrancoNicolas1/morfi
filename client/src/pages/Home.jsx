import React from 'react';
import styled from 'styled-components';
import { Footer } from '../components/footer/Footer';
import Section from '../components/Section/Section';
import Shops from '../components/Shops/Shops';
import { Navbar } from '../components/Navbar/Navbar';
import Cards from '../components/Cards/Cards';
import { Link } from 'react-router-dom';

const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  /* border: solid red; */
`;
export default function Home() {
  return (
    <>
      <ContainerHome>
        <Navbar />
        <Section />
        <Shops />
        <Link to="/formrestaurant">
          <button>ACA VA EL FORMULARIO </button>
        </Link>
        <Cards />
        <Footer />
      </ContainerHome>
    </>
  );
}

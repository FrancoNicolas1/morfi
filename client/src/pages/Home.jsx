/* import { Footer } from '../components/footer/Footer';
import Section from '../components/Section/Section';
import Shops from '../components/Shops/Shops';
import Cards from '../components/cards/Cards';
*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cards from '../components/cards/Cards';
import { Footer } from '../components/footer/Footer';
import LoginForm from '../components/Login';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegistroDeUsuario';
import Section from '../components/Section/Section';
import Shops from '../components/Shops/Shops';
import { useDispatch, useSelector } from 'react-redux';
import { allRestaurants } from '../redux/actions';
import { useEffect } from 'react';

const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  /* border: solid red; */
`;

export default function Home() {
  const dispatch = useDispatch();
  const [abrir, setAbrir] = useState(false);
  const [abrir1, setAbrir1] = useState(false);
  const allRestaurant = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(allRestaurants());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar
          abrir={abrir}
          setAbrir={setAbrir}
          abrir1={abrir1}
          setAbrir1={setAbrir1}
        />
        {abrir ? <LoginForm abrir={abrir} setAbrir={setAbrir} /> : null}
        {abrir1 ? <RegisterForm abrir1={abrir1} setAbrir1={setAbrir1} /> : null}
      </div>
      <ContainerHome>
        <Section />
        <Shops />
        <Link to="/formrestaurant">
          <button>ACA VA EL FORMULARIO </button>
        </Link>
        {allRestaurant.map((e) => e.name)}
        <Cards />
        <Footer />
      </ContainerHome>
    </>
  );
}

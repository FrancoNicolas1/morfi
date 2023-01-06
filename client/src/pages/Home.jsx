import React, { useState } from "react";
import styled from "styled-components";
import { Cards } from "../components/cards/Cards";
import { Footer } from "../components/footer/Footer";
import LoginForm from "../components/Login";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegistroDeUsuario";
import Section from "../components/Section/Section";
import Shops from "../components/Shops/Shops";
import { useDispatch, useSelector } from "react-redux";
import { allRestaurants } from "../redux/actions";
import { useEffect } from "react";

const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  const dispatch= useDispatch()
  const [abrir, setAbrir] = useState(false);
  const [abrir1, setAbrir1] = useState(false);
  const allRestaurant = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(allRestaurants());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar abrir={abrir} setAbrir={setAbrir} abrir1={abrir1} setAbrir1={setAbrir1}/>
        {abrir ? <LoginForm abrir={abrir} setAbrir={setAbrir} /> : null}
        {abrir1 ? <RegisterForm abrir1={abrir1} setAbrir1={setAbrir1} /> : null}
      </div>
      <ContainerHome>
        <h1>Morfy</h1>
        {allRestaurant.map(e=>e.name)}
        <Section />
        <Shops />
        <Cards />
        <Footer />
      </ContainerHome>
    </>
  );
}

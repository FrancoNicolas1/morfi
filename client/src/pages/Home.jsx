/* import { Footer } from '../components/footer/Footer';
import Section from '../components/Section/Section';
import Shops from '../components/Shops/Shops';
import Cards from '../components/cards/Cards';
*/
import React, { useState } from 'react';
import styled from 'styled-components';
import Cards from '../components/cards/Cards';
import { Footer } from '../components/footer/Footer';
import LoginForm from '../components/Login';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegistroDeUsuario';
import Section from '../components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { allRestaurants, getAllCategories } from '../redux/actions';
import { useEffect } from 'react';
import  Select  from '../components/Select/Select';
import { SearchBar } from '../components/Searchbar/SearchBar';
import { useAuth0 } from '@auth0/auth0-react';

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
  const categories= useSelector((state)=>state.categories)
  const {logout} = useAuth0()

  useEffect(() => {
    dispatch(allRestaurants());
    dispatch(getAllCategories())
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
        {/* <Shops /> */}
        <Select/>
        {/* <button onClick={()=>logout()}>asfasfasf</button> */}
        <Cards/>
       
        <Footer />
      </ContainerHome>
    </>
  );
}

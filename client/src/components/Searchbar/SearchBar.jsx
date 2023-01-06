import React from "react";
import styled from "styled-components";

const Container = styled.div`
background-image:url("https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-ar.jpg?quality=100&width=1345%22),%20url(%22https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-others.jpg?quality=100&width=1345");
height:200px;
background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`
const BoxSearch = styled.div`
    margin-bottom: 32px;
    padding: 0px;
    width: 100%;
`
const BoxText = styled.div`
font-size: 40px;
    text-align: center;
    color: rgb(255, 255, 255);
    margin: 35px auto;
    width: 90%;
`
const Search =styled.div`
    background-color: rgb(234, 227, 227);
    border-radius: 22px;
    border: 0px;
    box-sizing: border-box;
    color: rgb(88, 80, 101);
    cursor: pointer;
    font-size: 14px;
    height: 36px;
    line-height: 20px;
    outline: 0px;
    padding: 8px 32px 8px 44px;
    position: relative;
    text-overflow: ellipsis;
    width: 100%;
    `

export const SearchBar = () => {
  return (
    <>
    <Container>
      <BoxSearch>
        <BoxText>
          <h1>¡Pedí lo que quieras!</h1>
          <h2>Restaurantes, mercados, farmacias, kioscos y mucho más.</h2>
          <Search>
            
          </Search>
        </BoxText>
      </BoxSearch>
    </Container>
    </>
  )
};

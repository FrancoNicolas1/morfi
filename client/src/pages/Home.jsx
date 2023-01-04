import React from "react";
import Card from "../components/Card";
import Section from "../components/Section/Section";
import styled from "styled-components"
import Shops from "../components/Shops/Shops";

const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  border: solid red;
`

export default function Home (){
    return(
        <>
        <ContainerHome>
        <Card/>
        <Section/>
        <Shops/>
        </ContainerHome>
        </>
    )
}
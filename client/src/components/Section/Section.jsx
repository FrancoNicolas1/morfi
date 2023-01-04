import React from "react";
import styled from "styled-components"

const Header = styled.div`
background:red;
max-width:1340px;
height:400px;
margin: 20px auto;
display:grid;
grid-gap:20px;
grid-template-columns:repeat(2,1fr);
`
const Description = styled.div`
background:blue;
display:flex;
flex-direction:column;
justify-content:center;

`
const BoxText = styled.div`
margin:20px;
`
const BoxImage = styled.div`
margin-left:140px;
`
const Image = styled.img`
height:400px;
width:400px;
border-radius:50px;
`

export default function Section (){
    return(
        <>
       <Header>
        <Description>
        <BoxText>
        <h1>titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod placeat atque assumenda aspernatur totam, dolores architecto nesciunt corporis in. Quidem expedita error ducimus doloremque maiores reiciendis quos incidunt aliquid.</p>
        </BoxText>    
        </Description>
        <Description>
        <BoxImage>
        <Image  src="https://i.pinimg.com/564x/77/61/ea/7761ea5391176d673c2dadb677f589be.jpg"/>
        </BoxImage>
        </Description>
       </Header>
        </>
    )
}
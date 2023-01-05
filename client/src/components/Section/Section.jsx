import React from "react";
import {
    Header,
    Description,
    BoxText,
    BoxImage,
    Image,
  } from './section.styled';

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
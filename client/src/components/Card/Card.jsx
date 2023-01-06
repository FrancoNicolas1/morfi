import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:400px;
    height:250px;
    overflow:hidden;
    background:#fff;
    border-radius:10px;
    display:flex;
    box-shadow:0 5px 10px #033f49;
    `

const BoxContainer = styled.div`
width:60%;
height:100%;
display:grid;
grid-template-rows:50px 150px 50px;
padding:10px 15px;

`
const Image = styled.img`

`
const BoxTitle = styled.div`
background-color:green;
`
const BoxText = styled.div`

`
const Button = styled.button`
background:#0089ba;
padding:5px 10px;
color:#fff;
border-radius:5px;
outline:none;
border:none;

`
const BoxImage = styled.div`
background:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeechc1g-XhEHqmtfURsOaa3urN3CND5SsyA&usqp=CAU");
width:40%;
height:100%;
background-size:cover;
`
const BoxButton= styled.div`

`


export default function Card({name}) {
  return (
    <>
    <Container>
        <BoxImage></BoxImage>
    <BoxContainer>
        <BoxTitle>
            <h3>{name}</h3>  
        </BoxTitle>
        <BoxText>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, ut ipsum, aut ratione eius hic </p>
        </BoxText>
        <BoxButton>
            <Button>
            Boton
            </Button>
        </BoxButton>
    </BoxContainer>
    </Container>
    </>
  );
}

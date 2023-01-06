import React from 'react';

import {
    Container,
    Logo,
    BoxButtons,
    Box,
    LinksList,
    Links,
    Link,
    Buttons,
    Image
  } from './navbar.styled.js';



export const Navbar = () => {
  return(
    <>
     <Container>
     
        <Logo>
            <Image src="https://img.freepik.com/vector-premium/chef-logo-vector_20448-270.jpg?w=2000" alt="Logo de la marca"/>
        </Logo>
        <Box>
            <LinksList>
                <Links><Link>Services</Link></Links>
                <Links><Link>Services</Link></Links>
                <Links><Link>Services</Link></Links>
            </LinksList>         
        </Box>

        <BoxButtons>
        <Buttons>Login</Buttons>
        <Buttons>SingUp</Buttons>
        </BoxButtons>
    </Container>
    </>
  )
};

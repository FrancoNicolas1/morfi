import styled from 'styled-components';

export const Container = styled.div`
   background-color: #ff613c;;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
`
export const Logo = styled.div`

`
export const BoxButtons = styled.div`
display:flex;

flex-grow: 8;
justify-content: end;
gap:5px;

`
export const Box = styled.div`

`

export const LinksList = styled.ul`

list-style: none;
`
export const Links = styled.li`
display: inline-block;
    padding: 0 20px;   
`
export const Link = styled.a`
font-size: 700;
color: #eceff1;
text-decoration: none; 
`
export const Buttons = styled.button`
font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
`
export const Image = styled.img`
height: 70px;
width: auto;
transition: all 0.3s;
background-color:red;
`

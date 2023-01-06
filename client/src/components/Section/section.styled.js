import styled from "styled-components"

export const Header = styled.div`
background-color:red;
max-width:1340px;
height:300px;
margin: 20px auto;
display:grid;
grid-gap:20px;
grid-template-columns:repeat(2,1fr);
`
export const Description = styled.div`

display:flex;
flex-direction:column;
justify-content:center;

`
export const BoxText = styled.div`
margin:20px;
`
export const BoxImage = styled.div`
margin-left:140px;
`
export const Image = styled.img`
height:300px;
width:300px;
border-radius:50px;
`
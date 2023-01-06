import styled from 'styled-components';

export const Button = styled.button`
display: flex;
width: 4%;
justify-content: center;
font-size: 14px;
font-weight: 900;
border-radius: 10px;
cursor: pointer;
background: rgb(124, 0, 0);
color:rgb(197, 151, 151);
height: 4%;
padding: 5px;
border-width:0;
`;
export const Form = styled.form`
  cursor: pointer;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5%;
  width: 100%;
  font-weight: bolder;
  padding: 0.6rem 0.8rem;
  background-color: #ece8dd;
  box-shadow: 0 0 4px #000000;
  `;
export const Input = styled.input`
  display: flex;
  width: 20%;
  background: with;
  border-radius: 10px;
  `;
 
 export const Label = styled.label`
  color: #1a120b;
  `;
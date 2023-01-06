import styled from 'styled-components';

export const Button = styled.button`
cursor: pointer;
  display: flex;
  position: absolute;
  top: 2%;
  right: 3%;
  font-weight: bolder;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  background: rgb(124, 0, 0);
  color:rgb(197, 151, 151);
  border-width:0;
`;
export const Button1 = styled.button`
cursor: pointer;
  display: flex;
  position: absolute;
  top: 2%;
  right: 9%;
  font-weight: bolder;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  background: rgb(197, 151, 151);
  color:rgb(124, 0, 0);
  border-width:0;
`;

export const Select= styled.select`
display: flex;
  width: 15%;
  cursor: pointer;
  background: rgb(197, 151, 151);
  color: #1a120b;
  font-weight: 500;
  border-radius:7px;
`;

export const Div= styled.div`
 display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-direction: row;
`;
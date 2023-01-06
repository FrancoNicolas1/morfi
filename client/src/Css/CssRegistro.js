import styled from 'styled-components';

export const Button = styled.button`
align-self: center;
  cursor: pointer;
  margin: 10px 10px 40px 0px;
  font-size: smaller;
  font-weight: bolder;
  padding: 0.6rem 0.8rem;
  margin-left: 4px;
  border-radius: 4px;
  background: rgb(124, 0, 0);
  color:rgb(197, 151, 151);
  width: fit-content;
`;

export const Form = styled.form`
  cursor: pointer;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  font-weight: bolder;
  background:rgb(214, 211, 216);
  box-shadow: 0 0 4px #000000;
  position: absolute;
  left:35%;
  top:40%;
  overflow: hidden;
  z-index:200;
  `;

  export const Button1 = styled.button`
  cursor: pointer;
  margin: 10px 10px 0px 0px;
  font-size: smaller;
  font-weight: bolder;
  padding: 0.6rem 0.8rem;
  margin-left: 4px;
  border-radius: 4px;
  background: rgb(124, 0, 0);
  color:rgb(197, 151, 151);
  width: fit-content;
  align-self: flex-end;
`;

export const Label = styled.label`
display:flex;
flex-direction: column;
gap: 5px;
`;

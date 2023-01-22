import styled from "styled-components";

export const Header = styled.div`
  background-image: url("https://img.freepik.com/foto-gratis/ingredientes-italianos-crudos-frescos-pasta-espagueti-sobre-mesa-textura_23-2148195010.jpg?w=2000");
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`;
export const Description = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoxForm = styled.form`
  display: flex;
`;
export const Input = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 20px;
  outline: none;
  border: 1px solid #ccc;
  padding-left: 15px;
  font-size: 16px;
`;
export const BoxTitle = styled.div`
  padding-top: 50px;
`;
export const Button = styled.button`
  width: 80px;
  height: 31px;
  border-radius: 100px;
  border: 2px solid #ccc;
  cursor: pointer;
  background: white;
`;

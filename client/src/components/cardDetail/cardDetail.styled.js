import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  /* border: solid red; */
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  gap: 1rem;
  background-color: white;
  & .container-img-title {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem;
    align-self: flex-start;
    height: 65vh;
    background-color: #ff613c;
    & img {
      width: 30%;
      height: 50%;
      align-self: center;
      /* border: solid red; */
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  & .description {
    font-size: 0.8rem;
    alignself: center;
    color: black;
  }
  & .container-data-products {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    margin-top: 0;
    /* border: solid greenyellow; */
    justify-content: flex-start;
    background-color: gray;
    & .container-products {
      /* border: solid brown; */
      width: 100%;
      height: 100%;
      display: grid;
      gap: 1rem;
      margin: 0;
      grid-template-columns: repeat(auto-fill, 24vw);
    }
  }
`;

export const BtnBack = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  text-decoration: none;
  width: 5rem;
  height: 3rem;
  margin: 1rem;
  outline: none;
  border: 0.1px solid white;
  background-color: #fd7e14;
  color: white;
  border-radius: 8px;

  &:hover {
    color: white;
    border: 1px solid yellow;
    transition: 0.5s ease-in-out;
    opacity: 0.7;
  }
  /* border: 1px solid #1a120b; */
`;

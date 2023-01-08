import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  /* border: solid red; */
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  & .container-img-title {
    width: 30%;
    display: flex;
    flex-direction: column;

    gap: 1rem;
    & img {
      width: 100%;
      height: 50%;
      /* border: solid red; */
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  & .description {
    font-size: 0.8rem;
  }
  & .container-data-products {
    width: 90%;
    height: 100vh;
    /* border: solid greenyellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    & .container-products {
      /* border: solid brown; */
      display: grid;
      width: 100%;
      height: 100%;
      margin: 1rem auto;
      display: grid;
      gap: 1rem;
      grid-auto-rows: 22rem;
      grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
    }
  }
`;

export const BtnBack = styled(Link)`
  padding: 10px;
  text-decoration: none;
  width: 5rem;
  margin: 1rem 0;
  outline: none;
  border: 1px solid #1a120b;
  background-color: #ffd15f;
  color: #1a120b;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #1a120b;
    opacity: 0.7;
  }
  /* border: 1px solid #1a120b; */
`;

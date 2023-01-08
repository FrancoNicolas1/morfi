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
    width: 50%;
    display: flex;
    flex-direction: column;

    gap: 1rem;
    & img {
      width: 21.875rem;
      height: 21rem;
      /* border: solid red; */
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  & .description {
    font-size: 14px;
  }
  & .container-data-products {
    width: 50%;
    height: 100%;
    border: solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

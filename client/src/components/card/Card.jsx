import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import restaurantPhoto from './pngwing.com.png';
import { Link } from 'react-router-dom';


const Container = styled(Link)`
  /* border: solid brown; */
  text-decoration: none;
  color: #1a120b;
  border-radius: 10px;
  & :hover {
    color: #000;
  }
  & .image-card {
    width: 100%;
    height: 70%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  & .info-card {
    /* border: solid red; */
    padding: 0.2rem;
    background-color: #ece8dd;
  }
  & .data-restaurant {
    & .container-title-avatar {
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      & img {
        width: 30px;
      }

      & h3 {
        font-size: 16px;
        font-weight: 600;
        padding: 0;
        margin: 0;
      }
    }

    & .container-hors {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & .container-score {
      /* border: solid red; */
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0;
      font-weight: 800;
      margin: 0;
      padding: 0;
    }
    & .container-star-icon {
      color: rgb(255, 174, 0);
      /* border: solid green; */
    }
  }
`;

export default function Card({name, id, photo, reviews, products, category, description, rating}) {
  return (
    <Container to={'/detail'}>
      <img
        className="image-card"
        src={photo}
        alt=""
      />
      <div className="info-card">
        <div className="data-restaurant">
          <div className="container-title-avatar">
            <img src={restaurantPhoto} width="40" alt="" />
            <h3>{name}</h3>
          </div>
          <div className="container-hors">
            <p>35-50 min</p>
            <p>Envio Gratis</p>
          </div>
          <p className="container-score">
            <span className="container-star-icon">
              <FaStar fontSize={15} />
            </span>
            <span>{rating}</span>
          </p>
        </div>
      </div>
    </Container>
  );
}
